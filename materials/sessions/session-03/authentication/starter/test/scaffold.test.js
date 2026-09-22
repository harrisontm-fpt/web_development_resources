import { randomBytes } from 'node:crypto';
import { test, expect } from '@jest/globals';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import { createApp } from '../src/app.js';

// These checks describe ONLY the untouched teaching scaffold.
// After completing the TODOs, use npm test instead.
const secret = randomBytes(32).toString('hex');
const app = createApp({ jwtSecret: secret });

test('the untouched scaffold serves public data', async () => {
  expect((await request(app).get('/api/activities')).status).toBe(200);
});

test('the unfinished password comparison cannot issue a token', async () => {
  const response = await request(app).post('/api/auth/login')
    .send({ username: 'alice', password: 'StudentPass!23' });
  expect(response.status).toBe(401);
  expect(response.body.token).toBeUndefined();
});

test.each(['/api/auth/me', '/api/staff/summary'])
('the unfinished verifier denies even a correctly signed token at %s', async (url) => {
  const token = jwt.sign({}, secret, { subject: '2', expiresIn: '15m', algorithm: 'HS256' });
  const response = await request(app).get(url).set('Authorization', 'Bearer ' + token);
  expect(response.status).toBe(401);
  expect(response.body.user).toBeUndefined();
  expect(response.body.unpublishedActivities).toBeUndefined();
});
