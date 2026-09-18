# Session 12 — End-to-end testing

[Session index](../README.md) · [Student workshop](workshop.md)

**Week 6 · Lecture: 60 minutes**

## Learning goals

Automate an observable user journey, use reliable locators/assertions, and distinguish a full application test from a simulated network check.

## Teaching sequence

| Minutes | Focus |
| --- | --- |
| 0–10 | Retrieve integration boundaries and select a user journey |
| 10–25 | Browser automation, locators, and observable assertions |
| 25–40 | Implement and read a Playwright test |
| 40–50 | Repeatable data, failure diagnosis, and simulation |
| 50–60 | Plan coverage and prepare the test-readiness check |

## Test what a user can accomplish

An E2E test drives the browser through the application. “The page has a heading” is useful as a smoke check but does not establish the main journey. A stronger scenario finds an activity and verifies its attendance details, or saves data and verifies it after a reload.

Use roles and accessible names where practical. They describe the interface a user encounters and are less coupled to styling than long CSS selectors. Playwright's asynchronous assertions retry while waiting for the expected state; await them rather than adding arbitrary multi-second sleeps. See [Playwright assertions](https://playwright.dev/docs/test-assertions).

## Prepare a repeatable environment

Run frontend and backend against isolated test data. For the worked read-only example, use the session 8 App and session 6 API, with one Board games record whose details are Meet in Room A. Keep that fixture consistent for the example. Real project suites should arrange their own prerequisites and avoid relying on another test's success.

Use the class Playwright package/browser installation. This minimal **playwright.config.js** assumes both servers are already started; it does not start or seed them:

~~~js
import {defineConfig} from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  workers: 1,
  use: {
    baseURL: process.env.E2E_BASE_URL || 'http://localhost:5173',
    trace: 'retain-on-failure',
  },
});
~~~

Set E2E_BASE_URL to the actual test frontend address if it differs. See [Playwright configuration](https://playwright.dev/docs/test-configuration).

## Worked journey and recovery check

**e2e/activities.spec.js**

~~~js
import {test, expect} from '@playwright/test';

test('visitor can read the attendance details of a stored activity', async ({page}) => {
  await page.goto('/');
  const card = page.getByRole('listitem').filter({
    has: page.getByRole('heading', {name: 'Board games', exact: true}),
  });
  await expect(card).toBeVisible();
  await expect(card).toContainText('Meet in Room A');
});

test('visitor can retry after a simulated network failure', async ({page}) => {
  await page.route('**/api/activities', (route) => route.abort());
  await page.goto('/');
  await expect(page.getByRole('alert')).toContainText('Could not load');
  await page.unroute('**/api/activities');
  await page.getByRole('button', {name: 'Retry', exact: true}).click();
  await expect(page.getByRole('heading', {
    name: 'Board games', exact: true,
  })).toBeVisible();
});
~~~

Run with the class-installed tool:

~~~sh
npx playwright test
~~~

The first test reads through the real browser/API/SQL path. The second intentionally intercepts a request to make a failure reproducible, then restores the real path for retry. Label the simulated part accurately. Keep five meaningful E2E scenarios exercising the real application/backend path for final delivery; simulation is useful supplementary evidence.

## Diagnose a failure before adding retries

Inspect the failing assertion, screenshot/trace, current URL, console, network, and test data. A locator finding two controls needs a more precise relationship/name, not a longer timeout. A missing record may indicate fixture setup rather than a rendering bug.

Browser tests should not depend on a previous test's login, record, or ordering. Use dedicated test accounts where required and keep secrets out of files. If a scenario changes data, arrange and clean up only its own fixtures.

**Check understanding:** Why await expect(...).toBeVisible()? The screen can update asynchronously. Is a mocked successful API response proof SQL worked? No. Are five browsers running one scenario five distinct scenarios? No.

## Preparation and reading

Lecturer: rehearse the real data path and simulated failure separately.

- [WSK testing overview](../../../reference_materials/WSK-main/project/testing.md)
- [Test matrix and requirements](../../reviews_and_delivery.md)
