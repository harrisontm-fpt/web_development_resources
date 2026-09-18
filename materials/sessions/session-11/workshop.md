# Session 11 workshop — Test a real integration

[Lecture](lecture.md) · [Session index](../README.md)

**60-minute workshop + 60-minute project block · Ungraded**

## Before you start

You need the Express app separated from its listening entry point, Jest/Supertest, and an isolated test database with the project schema. Use test-only configuration before importing the app. Confirm the actual host, database, and account with a teammate without sharing passwords.

The lecture example works with session 6's read endpoint. It does not depend on a POST implementation.

## Step 1 — Select behaviours (0–10 minutes)

Choose one meaningful success scenario and one invalid-input scenario. Write the requirement, setup, request, and expected outcome before writing code. Identify which modules and real services the test will exercise.

Add both scenarios to the [test evidence matrix](../../reviews_and_delivery.md). Plan at least five meaningful integration scenarios for the project; the first two begin that suite.

## Step 2 — Implement and run (10–45 minutes)

1. Confirm the isolated database schema and safe configuration.
2. Create setup that inserts representative test data with unique identifiers.
3. Send a request through Supertest to the exported app.
4. Assert status and the actual data/behaviour required.
5. Add invalid input and assert a controlled rejection.
6. Clean only the data your suite created and close open resources.
7. Run the tests using your documented WSK/Jest command.

Use the lecture suite as a worked pattern. Adapt names, routes, and assertions to your application. One member writes the test, one inspects the boundary/data setup, and one checks whether assertions match the requirement. Rotate after the first passing scenario.

## Step 3 — Inspect a deliberate failure (45–60 minutes)

Temporarily change one expected value so the success test fails. Read the output and explain why the mismatch was detected. Restore the correct expectation and rerun.

Run each scenario independently using the runner's test filter, then run the suite again. Confirm cleanup does not leave accumulating fixtures. Record the build/commit and results.

## Project block (60 minutes)

Use 5 minutes planning, 45 expanding meaningful coverage/fixing defects, and 10 updating the matrix. Build toward five integration tests. Include failure/permission cases relevant to your brief without inventing features just to create tests.

## Evidence to keep

- [ ] Explicit integration boundary and isolated configuration.
- [ ] Success and invalid-input tests with useful assertions.
- [ ] Repeatable setup/cleanup and no dependence on test order.
- [ ] Demonstrated deliberate failure, restored passing suite.
- [ ] Requirement-to-test links and latest results.
- [ ] Remaining scenarios assigned to owners.

**If the suite hangs:** inspect open database pools, servers, and unresolved promises.
**If imports fail:** check ES-module settings, filenames/extensions, and Jest configuration against WSK.
**If records collide:** fix fixture isolation rather than repeatedly clearing a shared table.
**If finished early:** test persistence or permission failure for an existing feature and explain the extra boundary it covers.
**Before session 12:** select a browser journey whose backend prerequisites are repeatable.
