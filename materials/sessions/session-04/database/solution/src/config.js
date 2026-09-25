export function readConfig(env = process.env) {
  function port(name, fallback, minimum = 1) {
    const value = env[name] ?? fallback;
    if (!/^\d+$/.test(String(value)) || Number(value) < minimum || Number(value) > 65535) {
      throw new Error(`${name} must be a valid port number.`);
    }
    return Number(value);
  }
  for (const name of ['DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASSWORD']) {
    if (typeof env[name] !== 'string' || !env[name].trim() || env[name].startsWith('replace-with-')) {
      throw new Error(`Set ${name} in .env. See the setup guide.`);
    }
  }
  return {
    port: port('PORT', 3000, 0),
    database: {
      host: env.DB_HOST, port: port('DB_PORT', 3306), database: env.DB_NAME,
      user: env.DB_USER, password: env.DB_PASSWORD,
      connectionLimit: 5, connectTimeout: 5000, charset: 'utf8mb4',
    },
  };
}
