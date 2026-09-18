# Session 13 workshop — Audit a release candidate

[Lecture](lecture.md) · [Session index](../README.md)

**60-minute workshop + 60-minute project block · Ungraded**

## Before you start

Bring a deployed candidate, its commit identifier, test commands/results, README, and agreed minimum requirements. Use safe demo/test data. Have one member navigate, one inspect evidence, and one record findings; rotate at each station.

## Station 1 — Deployment and security (0–15 minutes)

Open the public URL in a fresh browser context. Complete a core journey, try direct navigation/reload, and confirm data comes from the intended API/database.

Check HTTPS, server validation, parameterised SQL, permissions for privileged actions, and absence of secrets from source/browser configuration. Use your project's established approach rather than adding a new authentication system during the audit.

Record findings with steps, expected/actual results, build, and owner.

## Station 2 — Automated checks (15–30 minutes)

Run the documented integration and E2E commands against isolated test environments. Inspect meaningful assertions and scenario counts. Verify at least five distinct scenarios of each kind are on track for checkpoint 2.

If a suite takes longer than the station, record that it is running and review its completed report during the project block. Do not describe a pending run as passed.

## Station 3 — Technical and manual UI checks (30–45 minutes)

Run Lighthouse on a relevant deployed page. Validate rendered HTML and applicable CSS with the class validation tools. Save page/build/date and review actionable findings.

Also check a narrow viewport, keyboard navigation, focus, labels, and a relevant error state. Automated findings and manual observations belong in the same prioritised defect process; no arbitrary Lighthouse threshold is added.

## Station 4 — README handover (45–60 minutes)

Have a member who did not author the setup instructions follow them in a separate working copy or environment. Check prerequisites, variable names, database preparation, startup, and tests. Begin a clean setup if time allows; record the exact point reached and finish during project time.

Ask whether the README makes the application purpose and major features easy to find. Inspect links to evidence.

## Project block (60 minutes)

Use 5 minutes to triage, 45 to fix/verify/deploy, and 10 to update the board. Freeze optional features. Separate remaining client minimums, blockers, essential-task defects, and polish.

Prepare checkpoint 2 evidence and individual explanations for session 14.

## Evidence to keep

- [ ] Public candidate URL and commit identifier.
- [ ] Deployment/security findings with actions.
- [ ] Completed automated test results or an explicit pending run.
- [ ] Lighthouse, HTML/CSS, and manual UI findings.
- [ ] README setup attempt and resulting corrections.
- [ ] Prioritised final work with owners and deadlines.

**If deployment is unavailable:** make restoration the first action; continue test/documentation checks independently. A local demo does not satisfy public availability.
**If finished early:** retest a previously fixed defect on the deployed build and verify that its evidence matches the current code.
**Next session:** all members attend the mandatory ungraded week 7 review.
