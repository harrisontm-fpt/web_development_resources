export function validateConfig({ jwtSecret, tokenTtl = '15m' } = {}) {
  if (typeof jwtSecret !== 'string' || !/^[a-f0-9]{64}$/i.test(jwtSecret)) {
    throw new Error('JWT_SECRET must contain 64 hexadecimal characters. Run npm run setup.');
  }
  // Explicit units avoid confusing numeric strings with seconds.
  if (typeof tokenTtl !== 'string' || !/^[1-9]\d{0,3}[smh]$/.test(tokenTtl)) {
    throw new Error('JWT_EXPIRES_IN must include units, for example 15m or 5s.');
  }
  return { jwtSecret, tokenTtl };
}
