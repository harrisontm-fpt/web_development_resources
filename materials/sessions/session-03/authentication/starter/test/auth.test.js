import { randomBytes } from 'node:crypto';
import { describe, test, expect } from '@jest/globals';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import { createApp } from '../src/app.js';

const secret = randomBytes(32).toString('hex');
const app = createApp({ jwtSecret: secret });
const alice = { username: 'alice', password: 'StudentPass!23' };
const morgan = { username: 'morgan', password: 'OrganiserPass!23' };
const login = (credentials) => request(app).post('/api/auth/login').send(credentials);
const me = (token) => request(app).get('/api/auth/me').set('Authorization', 'Bearer ' + token);
const sign = (payload = {}, options = {}) =>
  jwt.sign(payload, secret, { algorithm: 'HS256', subject: '1', expiresIn: '15m', ...options });

describe('Public routes and configuration', () => {
  test('public activities work without credentials and include only the published sample', async () => {
    const response = await request(app).get('/api/activities');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: 1, title: 'Campus coding club', published: true }]);
  });

  test.each([undefined, '', 'REPLACE_WITH_64_RANDOM_HEX_CHARACTERS'])('rejects a missing or placeholder secret: %s', (jwtSecret) => {
    expect(() => createApp({ jwtSecret })).toThrow('JWT_SECRET');
  });

  test('requires explicit units on the expiry setting', () => {
    expect(() => createApp({ jwtSecret: secret, tokenTtl: '15' })).toThrow('JWT_EXPIRES_IN');
  });

  test('unknown routes return a JSON 404', async () => {
    const response = await request(app).get('/missing');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Route not found.' });
  });
});

describe('Login', () => {
  test('valid credentials return a short-lived signed token and safe user fields', async () => {
    const response = await login(alice);
    expect(response.status).toBe(200);
    expect(response.headers['cache-control']).toBe('no-store');
    expect(response.body.user).toEqual({ id: 1, username: 'alice', role: 'student' });
    const claims = jwt.verify(response.body.token, secret, { algorithms: ['HS256'] });
    expect(Object.keys(claims).sort()).toEqual(['exp', 'iat', 'sub']);
    expect(claims.sub).toBe('1');
    expect(claims.exp - claims.iat).toBe(900);
    expect(JSON.stringify(response.body)).not.toContain('password');
    expect(JSON.stringify(response.body)).not.toContain(alice.password);
  });

  test('wrong password and unknown user have the same generic failure', async () => {
    const wrongPassword = await login({ ...alice, password: 'WrongPassword' });
    const unknownUser = await login({ ...alice, username: 'unknown' });
    expect(wrongPassword.status).toBe(401);
    expect(unknownUser.status).toBe(401);
    expect(wrongPassword.body).toEqual({ error: 'Invalid username or password.' });
    expect(unknownUser.body).toEqual(wrongPassword.body);
  });

  test.each([
    {},
    { username: 'alice' },
    { username: '', password: 'x' },
    { username: '  ', password: 'x' },
    { username: 42, password: 'x' },
    { username: 'alice', password: {} },
    { username: 'alice', password: '' },
    { username: 'alice', password: 'x'.repeat(73) },
    { username: 'alice', password: 'é'.repeat(37) },
  ])('invalid input returns 400 (case %#)', async (input) => {
    const response = await login(input);
    expect(response.status).toBe(400);
    expect(response.body.token).toBeUndefined();
  });

  test('malformed JSON returns 400 without parser internals', async () => {
    const response = await request(app).post('/api/auth/login')
      .set('Content-Type', 'application/json').send('{"password":');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Request body must be valid JSON.' });
  });

  test('oversized input is rejected', async () => {
    const response = await login({ ...alice, extra: 'x'.repeat(5000) });
    expect(response.status).toBe(413);
  });
});

describe('Protected requests', () => {
  test('login token identifies the current user', async () => {
    const loggedIn = await login(alice);
    expect(loggedIn.status).toBe(200);
    const response = await me(loggedIn.body.token);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ user: { id: 1, username: 'alice', role: 'student' } });
    expect(response.headers['cache-control']).toBe('no-store');
  });

  test.each(['', 'Basic abc', 'Bearer', 'Bearer one two', 'Bearer not-a-jwt'])
  ('rejects absent or malformed credentials (case %#)', async (header) => {
    const response = await request(app).get('/api/auth/me').set('Authorization', header);
    expect(response.status).toBe(401);
    expect(response.body.user).toBeUndefined();
  });

  test('rejects a modified signature', async () => {
    const parts = sign().split('.');
    parts[2] = (parts[2][0] === 'A' ? 'B' : 'A') + parts[2].slice(1);
    expect((await me(parts.join('.'))).status).toBe(401);
  });

  test('rejects an expired token without waiting', async () => {
    const token = sign({}, { expiresIn: -1 });
    expect((await me(token)).status).toBe(401);
  });

  test('rejects tokens signed with another secret', async () => {
    const token = jwt.sign({}, randomBytes(32).toString('hex'), { subject: '1', expiresIn: '15m' });
    expect((await me(token)).status).toBe(401);
  });

  test('rejects an unapproved signing algorithm', async () => {
    expect((await me(sign({}, { algorithm: 'HS384' }))).status).toBe(401);
  });

  test('rejects a signed token with no expiry', async () => {
    const token = jwt.sign({}, secret, { algorithm: 'HS256', subject: '1' });
    expect((await me(token)).status).toBe(401);
  });

  test('rejects a signed token with no user identifier', async () => {
    const token = jwt.sign({}, secret, { algorithm: 'HS256', expiresIn: '15m' });
    expect((await me(token)).status).toBe(401);
  });

  test('rejects a token for a nonexistent user', async () => {
    expect((await me(sign({}, { subject: '999' }))).status).toBe(401);
  });

  test('does not accept a token passed in the URL', async () => {
    const response = await request(app).get('/api/auth/me').query({ token: sign() });
    expect(response.status).toBe(401);
  });
});

describe('Server-side permissions', () => {
  test('staff summary requires authentication', async () => {
    expect((await request(app).get('/api/staff/summary')).status).toBe(401);
  });

  test('a student cannot promote themselves using login input', async () => {
    const loggedIn = await login({ ...alice, role: 'organiser' });
    expect(loggedIn.status).toBe(200);
    expect(loggedIn.body.user.role).toBe('student');
    const response = await request(app).get('/api/staff/summary')
      .set('Authorization', 'Bearer ' + loggedIn.body.token);
    expect(response.status).toBe(403);
    expect(response.body.unpublishedActivities).toBeUndefined();
  });

  test('roles are looked up server-side even if an extra claim exists', async () => {
    const response = await request(app).get('/api/staff/summary')
      .set('Authorization', 'Bearer ' + sign({ role: 'organiser' }));
    expect(response.status).toBe(403);
  });

  test('an organiser can read the staff summary', async () => {
    const loggedIn = await login(morgan);
    expect(loggedIn.status).toBe(200);
    const response = await request(app).get('/api/staff/summary')
      .set('Authorization', 'Bearer ' + loggedIn.body.token);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ unpublishedActivities: 2 });
  });
});
