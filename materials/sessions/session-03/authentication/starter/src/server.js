import dotenv from 'dotenv';
import { createApp } from './app.js';

dotenv.config({ path: new URL('../.env', import.meta.url), quiet: true });
const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535.');
}
const app = createApp({
  jwtSecret: process.env.JWT_SECRET,
  tokenTtl: process.env.JWT_EXPIRES_IN ?? '15m',
});
const server = app.listen(port, '127.0.0.1', () => {
  console.log('Teaching API ready at http://127.0.0.1:' + port);
});
server.on('error', (error) => {
  console.error(error.code === 'EADDRINUSE'
    ? 'Port is already in use. Stop the other API or change PORT in .env.'
    : 'Could not start the teaching API.');
  process.exitCode = 1;
});
