import mysql from 'mysql2/promise';

export function createPool(databaseConfig) {
  return mysql.createPool(databaseConfig);
}

export async function checkDatabase(pool) {
  const [[server]] = await pool.execute('SELECT VERSION() AS version');
  await pool.execute('SELECT id, title, details FROM activities LIMIT 1');
  return server.version;
}
