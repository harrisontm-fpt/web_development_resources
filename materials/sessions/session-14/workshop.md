# Session 14 workshop — Review, prioritise, and fix

[Briefing and support notes](lecture.md) · [Session index](../README.md)

**180-minute studio · Checkpoint 2 is mandatory and ungraded**

## Before you start

All members attend. Open the deployed application, proposal/minimum requirements, Trello board, test results, usability evidence, README, and contribution/AI records. Identify the candidate commit and check lecturer access.

## First hour — review rotation

Teams A, B, and C meet the lecturer at minutes 0–20, 20–40, and 40–60 respectively. Teams outside review work on known defects or organise their evidence.

Use your 20-minute slot:

1. **0–6 minutes:** demonstrate essential journeys on the deployed application.
2. **6–11 minutes:** each member explains contributions, decisions, and checks.
3. **11–16 minutes:** discuss missing requirements, tests, usability findings, and blockers.
4. **16–20 minutes:** agree actions with owners, due times, and verification.

Use the [checkpoint 2 checklist](../../reviews_and_delivery.md). Show actual results for five integration and five E2E tests; if some are missing or failing, identify them explicitly and propose a recovery action.

## Step 2 — Make a final action plan (60–75 minutes)

Review the action list as a team. Classify remaining work as:

- A delivery blocker.
- An incomplete agreed requirement.
- An essential-task defect.
- Optional polish.

Assign one owner and a verifier to each priority action. Compare work with remaining availability. Do not restart optional feature work.

## Step 3 — Fix and verify (75–135 minutes)

Work on the highest-impact actions. Use short reviewed changes. Reproduce each bug before fixing it, then check the original failure and affected existing behaviour.

Ask the lecturer for support with a concise evidence package: failing steps/request, expected/actual result, relevant logs, and what you have tried. Keep independent work moving while one member investigates a blocker.

## Step 4 — Consolidate the candidate (135–165 minutes)

Integrate completed fixes, deploy when appropriate, and rerun the relevant checks. Update test results and documentation links. Record any deployment failure with its owner and next action.

Inspect remaining work again; new evidence may change priorities.

## Step 5 — Commit to the next actions (165–180 minutes)

Each member states what they completed, what remains, and their next responsibility. Update the board and review action record with evidence. Confirm what must be ready for the session 15 rehearsal and readiness check.

## Evidence to keep

- [ ] Completed formal review record.
- [ ] Individual explanations and contribution links.
- [ ] Prioritised action list with owners and due times.
- [ ] Fixes linked to verification on the relevant build.
- [ ] Updated candidate/deployment status.
- [ ] README, demo, and feedback-form preparation tasks.

**If a blocker cannot be resolved today:** identify the exact external decision/access needed and continue unaffected essentials. Tell the lecturer which final requirement is at risk.
**If ready early:** ask a teammate to reproduce setup or verify an essential journey from a fresh browser context.
**Before session 15:** prepare a presentation under 10 minutes and ensure the feedback form includes the required questions.
