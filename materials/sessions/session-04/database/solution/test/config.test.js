import { readConfig } from '../src/config.js';
const valid = { DB_HOST: '127.0.0.1', DB_NAME: 'session04_activities', DB_USER: 'session04_app', DB_PASSWORD: 'local-example-only' };
test('defaults to local API and MariaDB ports', () => {
  expect(readConfig(valid).port).toBe(3000);
  expect(readConfig(valid).database.port).toBe(3306);
});
test.each(['DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASSWORD'])('rejects missing %s', (key) => {
  expect(() => readConfig({ ...valid, [key]: '' })).toThrow(key);
});
test('rejects the example password until configured', () => {
  expect(() => readConfig({ ...valid, DB_PASSWORD: 'replace-with-your-local-database-password' })).toThrow('DB_PASSWORD');
});
test.each(['abc', '3306oops', '-1', '65536', '0'])('rejects invalid DB_PORT %s', (value) => {
  expect(() => readConfig({ ...valid, DB_PORT: value })).toThrow('DB_PORT');
});