import { randomBytes } from 'node:crypto';
import { writeFile } from 'node:fs/promises';

const envUrl = new URL('../.env', import.meta.url);
const contents = 'JWT_SECRET=' + randomBytes(32).toString('hex') + '\nJWT_EXPIRES_IN=15m\nPORT=3000\n';
try {
  await writeFile(envUrl, contents, { flag: 'wx', mode: 0o600 });
  console.log('Created .env with a local signing secret. Keep this file out of Git.');
} catch (error) {
  if (error.code === 'EEXIST') console.log('.env already exists; its contents were kept.');
  else throw error;
}
