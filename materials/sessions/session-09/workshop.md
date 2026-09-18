# Session 09 workshop — Complete a create or edit journey

[Lecture](lecture.md) · [Session index](../README.md)

**60-minute workshop + 60-minute project block · Ungraded**

## Before you start

Select one essential create/edit action from your brief. Bring a working endpoint and its validation/access contract, plus the relevant wireframe. The lecture form assumes a POST route that you must implement; the earlier GET-only demo is not enough.

If your brief has no visitor-facing form, use a required content-management action with appropriate server-side protection. Do not add a public mutation solely to follow the example.

## Step 1 — Specify the interaction (0–10 minutes)

Write valid/invalid inputs, request method/URL/body, success response, and permission requirements. Decide what the user sees while saving, after success, and after failure. Agree the details-length limit and any domain rules before implementation.

## Step 2 — Connect the form (10–45 minutes)

1. Verify the endpoint with your HTTP client and development data.
2. Add controlled fields with visible labels.
3. Prevent the browser's default full-page submission.
4. Validate obvious input problems for immediate feedback.
5. Send the request, including the project's existing authentication/CSRF handling where applicable.
6. Disable duplicate clicks while pending.
7. Confirm success from the server before clearing fields.
8. Refresh the list or show/navigate to the saved record.

One member implements, one compares the wireframe/contract, and one inspects API/SQL behaviour. Rotate after approximately 15 minutes.

Keep state local unless multiple components need it. A custom hook or context is optional and must solve an actual coordination/reuse problem.

## Step 3 — Check success and recovery (45–60 minutes)

Use development/test data:

- Save valid data, reload, and confirm it persisted.
- Try a blank or too-long title; inspect feedback.
- Bypass client validation through an HTTP client and verify server rejection.
- Make the local API unavailable and confirm text remains after failure.
- Restore the API and retry.
- If permissions apply, verify an unauthorised request is rejected by the server.

Record the actual response and UI outcome. Do not test destructive actions on real client records.

## Project block (60 minutes)

Use the 5/45/10 routine to finish the essential journey, review it, and link evidence. Add missing cases to the backlog and prepare realistic tasks for session 10's usability test.

## Evidence to keep

- [ ] Request/response and validation rules.
- [ ] Complete create/edit journey with persisted result.
- [ ] Labelled fields and pending/success/failure feedback.
- [ ] Server-side validation and applicable permission checks.
- [ ] Recovery check preserving entered work.
- [ ] Review link and next actions.

**If saving returns 404:** verify that the method and route exist; a GET handler does not handle POST.
**If the record is saved but the screen is stale:** inspect the post-save refresh/state flow separately from persistence.
**If finished early:** test direct route navigation/reload or improve focus/error instructions.
**Exit question:** Which part of your evidence proves data survived a page reload?
