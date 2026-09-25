// This suite intentionally deletes all rows ONLY in session04_activities_test.
// Create the separate test database/account using the lecturer guide first.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { readConfig } from '../src/config.js';
import { createPool } from '../src/db.js';

const envFile = dotenv.config({ path: '.env.test', quiet: true });
if (envFile.error) throw new Error('Create .env.test from .env.test.example; see the lecturer guide.');
const env = Object.fromEntries(['HOST', 'PORT', 'NAME', 'USER', 'PASSWORD'].map(key => ['DB_' + key, process.env['TEST_DB_' + key]]));
assert.equal(env.DB_NAME, 'session04_activities_test', 'Only the dedicated test database is allowed.');
assert.equal(env.DB_USER, 'session04_test', 'Use the dedicated test account.');
assert.ok(['127.0.0.1', 'localhost'].includes(env.DB_HOST), 'Tests require a local database.');
const config = readConfig(env);
const pool = createPool(config.database);
let server;
let cleanupAllowed = false;
async function startServer() {
  const child = spawn(process.execPath, ['src/server.js'], {
    cwd: fileURLToPath(new URL('../', import.meta.url)),
    env: { ...process.env, ...env, PORT: '0', DOTENV_CONFIG_QUIET: 'true' },
    stdio: ['ignore', 'pipe', 'pipe'],
    windowsHide: true,
  });
  server = child;
  return new Promise((resolve, reject) => {
    let output = '';
    const timeout = setTimeout(() => { child.kill(); reject(new Error('API startup timed out.')); }, 15000);
    child.once('error', error => { clearTimeout(timeout); reject(error); });
    child.once('exit', code => { clearTimeout(timeout); reject(new Error('API exited before readiness, code ' + code)); });
    child.stdout.on('data', chunk => {
      output += chunk.toString();
      const match = output.match(/Teaching API ready at (http:\/\/127\.0\.0\.1:\d+)/);
      if (match) { clearTimeout(timeout); resolve(match[1]); }
    });
  });
}
async function stopServer() {
  if (!server || server.exitCode !== null || server.signalCode !== null) return;
  const exited = once(server, 'exit');
  server.kill();
  await exited;
}
async function sqlFile(name) {
  const source = await readFile(new URL('../sql/' + name, import.meta.url), 'utf8');
  // These supplied files use simple statements and line comments only.
  for (const statement of source.replace(/^--.*$/gm, '').split(';').filter(s => s.trim())) {
    await pool.query(statement);
  }
}
async function get(url, status) {
  const res = await fetch(url);
  assert.equal(res.status, status);
  return res.json();
}
try {
  const [[{ version }]] = await pool.execute('SELECT VERSION() AS version');
  assert.match(version, /MariaDB/i, 'Run this suite against MariaDB.');
  cleanupAllowed = true;
  console.log('Real database: ' + version);
  await pool.execute('DELETE FROM activities');
  let base = await startServer();
  assert.deepEqual(await get(base + '/api/activities', 200), []);
  await sqlFile('seed.sql');
  await sqlFile('seed.sql');
  const seeded = await get(base + '/api/activities', 200);
  assert.equal(seeded.length, 2, 'Repeated seed must not duplicate rows.');
  assert.deepEqual(seeded.map(row => row.id), [1, 2]);
  const input = { title: "Student's coding club", details: "Meet in Room B. '); DROP TABLE activities; --" };
  const response = await fetch(base + '/api/activities', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input),
  });
  assert.equal(response.status, 201);
  const created = await response.json();
  assert.equal(response.headers.get('location'), '/api/activities/' + created.id);
  assert.ok(Number.isInteger(created.id) && created.id > 2);
  assert.deepEqual(created, { id: created.id, ...input });
  const [[stored]] = await pool.execute('SELECT id, title, details FROM activities WHERE id = ?', [created.id]);
  assert.deepEqual(stored, created);
  await sqlFile('seed.sql');
  assert.deepEqual(await get(base + '/api/activities/' + created.id, 200), created);
  await stopServer();
  base = await startServer();
  assert.deepEqual(await get(base + '/api/activities/' + created.id, 200), created, 'Record must survive a backend process restart.');
  await get(base + '/api/activities/2147483647', 404);
  const invalid = await fetch(base + '/api/activities', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: ' ', details: 'x' }),
  });
  assert.equal(invalid.status, 400);
  assert.equal((await get(base + '/api/activities', 200)).length, 3);
  console.log('PASS: empty list, repeatable seeds, POST, bound text, stored row, GET, restart persistence, 404, and validation.');
} finally {
  await stopServer();
  try {
    if (cleanupAllowed) await pool.execute('DELETE FROM activities');
  } finally {
    await pool.end();
  }
}