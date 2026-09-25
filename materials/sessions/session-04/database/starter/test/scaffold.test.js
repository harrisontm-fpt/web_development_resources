import { jest } from '@jest/globals';
import request from 'supertest';
import { createApp } from '../src/app.js';
let pool;
let app;
beforeEach(() => {
  pool = { execute: jest.fn() };
  app = createApp(pool);
});
test('unfinished list handler returns 501 without SQL', async () => {
  expect((await request(app).get('/api/activities')).status).toBe(501);
  expect(pool.execute).not.toHaveBeenCalled();
});
test('unfinished single-record handler returns 501 without SQL', async () => {
  expect((await request(app).get('/api/activities/1')).status).toBe(501);
  expect(pool.execute).not.toHaveBeenCalled();
});
test('unfinished create handler returns 501 without SQL', async () => {
  expect((await request(app).post('/api/activities').send({ title: 'x', details: 'y' })).status).toBe(501);
  expect(pool.execute).not.toHaveBeenCalled();
});
test('supplied validation rejects bad IDs and bodies before TODO handlers', async () => {
  expect((await request(app).get('/api/activities/abc')).status).toBe(400);
  expect((await request(app).post('/api/activities').send({ title: ' ', details: 'x' })).status).toBe(400);
  expect(pool.execute).not.toHaveBeenCalled();
});