import 'dotenv/config';
import { readConfig } from '../src/config.js';
import { createPool, checkDatabase } from '../src/db.js';

let pool;
try {
  pool = createPool(readConfig().database);
  const version = await checkDatabase(pool);
  console.log(`Database connection and activities table OK. Server: ${version}`);
} catch (error) {
  console.error(pool ? `Database check failed (${error.code ?? 'unknown error'}). See the setup guide.` : error.message);
  process.exitCode = 1;
} finally {
  if (pool) await pool.end();
}
