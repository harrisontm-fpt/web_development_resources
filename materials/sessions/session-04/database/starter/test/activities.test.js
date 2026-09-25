import { jest } from '@jest/globals';
import request from 'supertest';
import { createApp } from '../src/app.js';

let pool;
let app;
const sample = { id: 7, title: 'Board games', details: 'Meet in Room A' };
beforeEach(() => {
  pool = { execute: jest.fn() };
  app = createApp(pool);
});
test('GET returns activities without driver metadata', async () => {
  pool.execute.mockResolvedValue([[sample], [{ name: 'id' }]]);
  const res = await request(app).get('/api/activities');
  expect(res.status).toBe(200);
  expect(res.body).toEqual([sample]);
});
test('GET returns 200 and [] for an empty collection', async () => {
  pool.execute.mockResolvedValue([[], []]);
  const res = await request(app).get('/api/activities');
  expect(res.status).toBe(200);
  expect(res.body).toEqual([]);
});
test('GET one returns the object', async () => {
  pool.execute.mockResolvedValue([[sample], []]);
  const res = await request(app).get('/api/activities/7');
  expect(res.status).toBe(200);
  expect(res.body).toEqual(sample);
});
test('GET one returns 404 when the query finds no row', async () => {
  pool.execute.mockResolvedValue([[], []]);
  const res = await request(app).get('/api/activities/7');
  expect(res.status).toBe(404);
  expect(res.body).toEqual({ error: 'Activity not found.' });
});
test.each(['abc', '0', '-1', '1.5', '01', '2147483648', '1 OR 1=1'])('rejects invalid ID %s before querying', async (id) => {
  const res = await request(app).get('/api/activities/' + encodeURIComponent(id));
  expect(res.status).toBe(400);
  expect(pool.execute).not.toHaveBeenCalled();
});
test('POST returns 201, generated ID and Location; trims fields and ignores client ID', async () => {
  pool.execute.mockResolvedValue([{ insertId: 42, affectedRows: 1 }, []]);
  const res = await request(app).post('/api/activities')
    .send({ id: 999, title: '  Coding club  ', details: '  Bring a laptop.  ' });
  expect(res.status).toBe(201);
  expect(res.headers.location).toBe('/api/activities/42');
  expect(res.body).toEqual({ id: 42, title: 'Coding club', details: 'Bring a laptop.' });
});
test('POST keeps apostrophes and SQL-like text in bound values', async () => {
  const title = "Student's club";
  const details = "'); DROP TABLE activities; --";
  pool.execute.mockResolvedValue([{ insertId: 8 }, []]);
  const res = await request(app).post('/api/activities').send({ title, details });
  expect(res.status).toBe(201);
  const [sql, values] = pool.execute.mock.calls[0];
  expect(sql).not.toContain(title);
  expect(sql).not.toContain(details);
  expect(values).toEqual([title, details]);
  expect(res.body).toEqual({ id: 8, title, details });
});
test.each([
  {}, [], { title: 123, details: 'x' }, { title: 'x', details: null },
  { title: '  ', details: 'x' }, { title: 'x', details: '\n ' },
  { title: 'x'.repeat(121), details: 'x' }, { title: 'x', details: 'x'.repeat(2001) },
])('rejects invalid POST body %# without querying', async (body) => {
  const res = await request(app).post('/api/activities').send(body);
  expect(res.status).toBe(400);
  expect(pool.execute).not.toHaveBeenCalled();
});
test('accepts boundary lengths', async () => {
  pool.execute.mockResolvedValue([{ insertId: 9 }, []]);
  const res = await request(app).post('/api/activities')
    .send({ title: 'x'.repeat(120), details: 'x'.repeat(2000) });
  expect(res.status).toBe(201);
});
test('rejects malformed JSON', async () => {
  const res = await request(app).post('/api/activities').type('json').send('{"title":');
  expect(res.status).toBe(400);
  expect(pool.execute).not.toHaveBeenCalled();
});
test('rejects a body that is not JSON', async () => {
  const res = await request(app).post('/api/activities').type('text').send('hello');
  expect(res.status).toBe(400);
  expect(pool.execute).not.toHaveBeenCalled();
});
test('rejects oversized requests', async () => {
  const res = await request(app).post('/api/activities').send({ title: 'x', details: 'x'.repeat(40000) });
  expect(res.status).toBe(413);
  expect(pool.execute).not.toHaveBeenCalled();
});
test.each(['list', 'one', 'create'])('database failure in %s returns generic 500', async (route) => {
  pool.execute.mockRejectedValue(new Error('password=private SQL SELECT details'));
  const res = route === 'create'
    ? await request(app).post('/api/activities').send({ title: 'x', details: 'y' })
    : await request(app).get(route === 'one' ? '/api/activities/7' : '/api/activities');
  expect(res.status).toBe(500);
  expect(res.body).toEqual({ error: 'Unable to complete the database request.' });
});
test('unknown route is 404', async () => {
  expect((await request(app).get('/not-a-route')).status).toBe(404);
});