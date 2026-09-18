# Session 08 workshop — Connect and demonstrate a feature

[Lecture](lecture.md) · [Session index](../README.md)

**60-minute workshop + three 20-minute reviews during the project hour**
**Checkpoint 1 is mandatory and ungraded; every team member attends.**

## Before you start

Run your backend and frontend separately. Verify the API response first. Bring wireframes, proposal, board, and contribution records. Keep the lecturer's review slot visible.

## Step 1 — Trace the contract (0–15 minutes)

Draw browser → endpoint → query → JSON → component. Add the actual URL, fields, and component names. Compare the live response with the sample data used in session 7.

Configure the agreed API route. If using the lecture demo, add an /api development proxy to your existing Vite configuration targeting the backend on port 3000; preserve the rest of the configuration. Restart the development server. Record how production routing will differ.

## Step 2 — Connect the screen (15–40 minutes)

Replace the sample data source with a request to your project endpoint. Use the lecture pattern or your WSK implementation.

1. Render a loading state.
2. Check HTTP success before using response data.
3. Render actual records and a meaningful empty state.
4. Show a recoverable error message.
5. Handle cleanup so an obsolete request does not update the wrong view.

Rotate who drives and who traces data. Confirm the screen displays the actual records returned by SQL.

## Step 3 — Exercise the states (40–60 minutes)

Use the development environment:

- Success: show a known record and compare its fields with SQL/API output.
- Loading: use Network throttling in browser developer tools.
- Empty: use a safe test dataset, nonmatching query, or temporary demo fixture; do not delete client records.
- Error/retry: stop only your local backend, observe the UI, restart it, and retry.

Record expected and actual behaviour. Restore normal settings after the checks.

## Project hour — checkpoint 1

| Minutes within your slot | What to do |
| --- | --- |
| 0–6 | Demonstrate one narrow connected journey |
| 6–11 | Each member explains contributions and decisions |
| 11–16 | Discuss scope, blockers, design, and next work |
| 16–20 | Record agreed actions with owners and due dates |

Teams not in review continue development and prepare evidence. A list of SQL records displayed through React is an appropriate small journey; a complete MVP is not expected.

## Evidence to keep

- [ ] Connected feature and trace diagram.
- [ ] Success/loading/empty/error checks.
- [ ] Current proposal, designs, and realistic board.
- [ ] Individual contributions and explanations.
- [ ] Deployment result or concrete blocker.
- [ ] Review action list.

**If integration fails:** use the lecture's diagnosis table and show the exact failing boundary in the review. Do not replace the real endpoint with hardcoded data and claim integration.
**If finished early:** improve one recovery message or complete a review action.
**Before session 9:** choose the next essential form or mutation and agree its request, response, and access requirements.
