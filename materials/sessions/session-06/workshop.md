# Session 06 workshop — Build one SQL-backed endpoint

[Lecture](lecture.md) · [Session index](../README.md)

**60-minute workshop + 60-minute project block · Ungraded**

## Before you start

Bring the WSK Express project, a working development SQL database, your proposal's first API example, and the lecturer's deployment setup sheet. Use the existing WSK dependency versions and package scripts.

If you need the lecture demo, use an isolated empty database, ES modules, and the three files shown there. Configure DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, and PORT outside version control. From the demo root, node src/server.js starts the example after dependencies and the table are prepared.

## Step 1 — Agree the contract (0–10 minutes)

Choose one useful read endpoint backed by one main entity. Write:

- URL and optional query parameters.
- One successful response with representative data.
- Empty-result response.
- Invalid-input response.

Use the lecture's activities endpoint if you need a bridge, then map it to your actual project. Decide which screen will consume the response.

## Step 2 — Implement the route and query (10–40 minutes)

1. Check SQL access using the project's normal database tooling.
2. Create representative development records if needed; do not replace existing client data.
3. Implement the route and a parameterised query.
4. Validate relevant request values before querying.
5. Return a predictable JSON shape and forward unexpected errors to an error handler.
6. Keep app creation separate from the normal listening entry point.

One member drives, one navigates, and one compares implementation to the contract. Rotate the driver halfway through.

For the lecture example, start with **GET /api/activities** and then **GET /api/activities?title=Board**. The first should show both seeded records; the second should show Board games.

## Step 3 — Check the contract (40–50 minutes)

Use the browser or your WSK HTTP client. Record actual status and response for:

1. A successful request.
2. A valid request with no matches.
3. Invalid input.

For the lecture endpoint, send a title longer than 120 characters to exercise the invalid-input response consistently across query-parser configurations. Do not count a server crash as successful validation.

Inspect API logs for unexpected failures. A database connection problem is different from an empty collection.

## Step 4 — Observe deployment (50–60 minutes)

Follow the lecturer's demonstration. Record the service start command, variable names, API URL, and database-network dependency. Identify what differs from your local setup. Do not include secrets in your notes.

## Project block (60 minutes)

Use the 5/45/10 routine. Adapt the endpoint to your real data and begin deployment through the supplied route. Verify the published endpoint, or record a specific blocker with an owner and next action.

## Evidence to keep

- [ ] Request/response contract and data-model note.
- [ ] SQL-backed endpoint in a reviewed change.
- [ ] Successful, empty, and invalid request results.
- [ ] Safe setup instructions and example variable names.
- [ ] Deployment URL or concrete blocker/owner.

**If blocked:** check service startup, SQL connection, query, and response separately. Keep progressing on the contract and manual test cases while access is resolved.
**If finished early:** add a missing-record lookup only if useful to your brief; do not expand scope for the exercise.
**Before session 7:** bring wireframes and a small representative response ready to display in React.
