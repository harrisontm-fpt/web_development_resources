import 'dotenv/config';
import { readConfig } from './config.js';
import { createPool, checkDatabase } from './db.js';
import { createApp } from './app.js';

let pool;
try {
  const config = readConfig();
  pool = createPool(config.database);
  await checkDatabase(pool);
  const server = createApp(pool).listen(config.port, '127.0.0.1', () => {
    console.log(`Teaching API ready at http://127.0.0.1:${server.address().port}`);
  });
  server.on('error', async (error) => {
    console.error(`API could not start (${error.code ?? 'unknown error'}). Check PORT.`);
    await pool.end();
    process.exitCode = 1;
  });
  let stopping = false;
  function stop() {
    if (stopping) return;
    stopping = true;
    server.close(async () => { await pool.end(); });
  }
  process.on('SIGINT', stop);
  process.on('SIGTERM', stop);
} catch (error) {
  // Configuration errors contain field names only; database messages can contain secrets.
  console.error(pool ? `Database check failed (${error.code ?? 'unknown error'}). See the setup guide.` : error.message);
  if (pool) await pool.end();
  process.exitCode = 1;
}
