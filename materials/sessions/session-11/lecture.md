# Session 11 — Integration testing

[Session index](../README.md) · [Student workshop](workshop.md)

**Week 6 · Lecture: 60 minutes**

## Learning goals

Choose integration boundaries, write meaningful assertions, isolate SQL test data, and explain what a passing test does and does not prove.

## Teaching sequence

| Minutes | Focus |
| --- | --- |
| 0–10 | Retrieve acceptance criteria and recent defects |
| 10–25 | Unit, integration, and E2E boundaries |
| 25–40 | Arrange/Act/Assert and a real SQL-backed example |
| 40–50 | Test setup, cleanup, independence, and failures |
| 50–60 | Select project scenarios and discuss evidence |

## Choose the boundary deliberately

A unit test checks a small piece in isolation. An integration test checks cooperating pieces. In today's example, an HTTP request exercises Express validation, a route, a database query, and the response. An E2E test later adds the browser journey.

A mocked SQL response can test application behaviour, but cannot demonstrate that the real query/schema/driver cooperate. Use an actual isolated test database for the taught scenario. Mocking an external service can be useful when that service is outside the boundary you intend to exercise; name the boundary honestly.

## Assertions should establish behaviour

A status-only test can pass even when the wrong record is returned. Arrange known data, act through the application, and assert the status and meaningful result. Choose success, invalid input, missing data, permissions, and persistence scenarios relevant to the brief.

The final assignment requires **at least five integration tests and five E2E tests**. Multiple assertions in one scenario do not create multiple scenarios.

## Worked integration example

Use the session 6 app/db modules with a **separate database whose name ends in _test**, containing the same activities schema. Configure that database before running tests; never point this suite at client/production data. The name guard is an additional check, not a substitute for verifying the actual credentials and host.

Install/use the WSK Jest and Supertest versions. For the ES-module demo, keep type: module in package.json and use this **jest.config.js**:

~~~js
export default {
  testEnvironment: 'node',
  transform: {},
  testMatch: ['**/test/**/*.test.js'],
};
~~~

**test/activities.test.js**

~~~js
import 'dotenv/config';
import {randomUUID} from 'node:crypto';
import request from 'supertest';
import {beforeEach, afterEach, afterAll, test, expect} from '@jest/globals';

if (!process.env.DB_NAME?.endsWith('_test')) {
  throw new Error('Select the isolated _test database before running.');
}
const {default: app} = await import('../src/app.js');
const {default: pool} = await import('../src/db.js');

let record;
beforeEach(async () => {
  record = undefined;
  const title = 'Test activity ' + randomUUID();
  const [result] = await pool.execute(
    'INSERT INTO activities (title, details) VALUES (?, ?)',
    [title, 'Meet in the test room'],
  );
  record = {id: result.insertId, title};
});

afterEach(async () => {
  if (record) {
    await pool.execute('DELETE FROM activities WHERE id = ?', [record.id]);
  }
});
afterAll(async () => {
  await pool.end();
});

test('returns the persisted activity matching the title', async () => {
  const response = await request(app)
    .get('/api/activities')
    .query({title: record.title});
  expect(response.status).toBe(200);
  expect(response.body).toEqual([{
    id: record.id,
    title: record.title,
    details: 'Meet in the test room',
  }]);
});

test('rejects a title filter longer than the agreed limit', async () => {
  const response = await request(app)
    .get('/api/activities')
    .query({title: 'x'.repeat(121)});
  expect(response.status).toBe(400);
  expect(response.body.error).toEqual(expect.any(String));
});
~~~

The suite creates fresh data for each test and removes only records it owns. Closing the pool lets the process finish. Run from the backend root with the WSK ES-module command:

~~~sh
node --experimental-vm-modules node_modules/jest/bin/jest.js --runInBand
~~~

The configuration separates these tests from Playwright files. Adapt the existing project configuration rather than overwriting unrelated tests. Jest's [ES-module documentation](https://jestjs.io/docs/ecmascript-modules) explains the module settings.

## Learn from a failure

Read expected versus actual values, locate the failing boundary, reproduce, fix, and rerun. Temporarily changing one expected title demonstrates that the test detects a mismatch; restore the correct assertion afterward. Do not weaken a correct assertion merely to get green output.

Tests should run independently. A “create user” test followed by a “login that user” test creates an order dependency; each scenario should arrange its own prerequisites.

**Check understanding:** Does a mocked database test prove SQL works? No. Why not delete the whole activities table after each test? It may remove data owned by other tests or developers; isolate and clean only your fixtures.

## Preparation and reading

Lecturer: rehearse the suite against a dedicated test database and verify the guard stops a wrong configuration.

- [WSK testing](../../../reference_materials/WSK-main/project/testing.md)
- [Test evidence matrix](../../reviews_and_delivery.md)
