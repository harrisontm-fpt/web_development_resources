# Session 12 workshop — Automate a user journey

[Lecture](lecture.md) · [Session index](../README.md)

**60-minute workshop + 60-minute project block · Ungraded test-readiness check**

## Before you start

Start the frontend and backend against isolated test data. Use the Playwright setup from WSK; if it is missing, complete package/browser setup with the lecturer before the timed work. Record the actual frontend URL.

The lecture tests expect the session 8 screen, the session 6 API, and a Board games fixture. Adapt the selectors and setup for your own journey rather than changing your product to match the example.

## Step 1 — Write the user scenario (0–10 minutes)

Choose an essential journey with repeatable prerequisites. Write its start state, user actions, and success outcome. Decide what data/account must exist and who owns its cleanup.

Identify what makes this scenario more informative than just checking the page heading.

## Step 2 — Implement the browser test (10–45 minutes)

1. Configure the test directory and base URL without overwriting existing project settings.
2. Open the starting page.
3. Locate controls through meaningful roles/names where possible.
4. Perform the user's actions.
5. Await assertions on the outcome, including persisted results after reload where relevant.
6. Run the test and inspect failures.
7. Add a failure/recovery scenario. If using request interception, label that simulated boundary.

Rotate the driver after the first scenario runs. Everyone explains one locator and one assertion. Do not add fixed sleeps as a first response to a failure.

## Step 3 — Diagnose and repeat (45–60 minutes)

Inspect one failed run or deliberately use an incorrect expected result to see how the failure is reported. Restore the correct test. Use the trace/report produced by your class configuration.

Run the real journey twice and confirm it is not accidentally dependent on earlier data or a previous login. Record build, configuration, result, and relevant defect links.

## Project block (60 minutes)

Use the 5/45/10 routine. Expand the test matrix toward **five integration tests and five E2E tests**. Assign missing scenarios and prioritise defects discovered by tests.

Demonstrate a running example from each suite at the ungraded test-readiness check. Check that the commands are documented for another team member to use.

## Evidence to keep

- [ ] Real user journey with repeatable data/account setup.
- [ ] Browser test using meaningful locators and awaited outcomes.
- [ ] Failure/recovery evidence, labelled where simulated.
- [ ] Repeated-run result and cleanup plan for mutations.
- [ ] Matrix showing current and planned integration/E2E coverage.
- [ ] Defects and remaining scenarios with owners.

**If the browser cannot connect:** verify server startup and the exact base URL before changing test code.
**If two elements match:** scope the locator to the relevant region/item or use a more precise accessible name.
**If data is missing:** inspect fixtures and API output rather than weakening assertions.
**If finished early:** add a real existing journey covering an empty state, permissions, or recovery.
**Before session 13:** prepare suite results and a deployable candidate for the release audit.
