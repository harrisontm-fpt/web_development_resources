# Session 16 workshop — Present, test, and deliver

[Session briefing](lecture.md) · [Session index](../README.md)

**180-minute final session · Final delivery due 48 hours after the session ends**

## Before you start

Open your public application, README, demonstration data, presentation materials if used, feedback form, and results link. All members participate. Check the exact final deadline in the LMS.

## Part 1 — Present your project (0–60 minutes)

The lecturer assigns A, B, C presentation order. After five minutes of opening instructions, each team has a 15-minute slot: aim for a nine-minute presentation, approximately five minutes of questions, and a short transition.

Cover:

1. Team members, idea, intended audience, and value.
2. Main features and functionality.
3. A demonstration of important journeys.
4. How to test the application and locate its major features.
5. Contributions, decisions, and any material limitations.

Slides are optional; the README may be used. Answer questions using actual code/design/test evidence. If deployment fails, explain what happened; a local demonstration can show progress but does not replace final public availability.

## Part 2 — Test both other projects (60–110 minutes)

| Round | Time | A tests | B tests | C tests |
| --- | --- | --- | --- | --- |
| 1 | 60–85 | B | C | A |
| 2 | 85–110 | C | A | B |

For each 25-minute round:

- Spend about five minutes reading the README and identifying tasks.
- Spend about 15 minutes testing essential journeys and relevant failure/empty states.
- Spend about five minutes recording findings and ratings.

Members may divide tasks. Use designated demo data/accounts. Record task, expected behaviour, actual result, and steps to reproduce. Avoid altering real client data.

## Part 3 — Complete feedback (110–120 minutes)

Submit a response for each project you tested. Each team's form must include:

1. **Was the repository's README.md clear and did it meet the requirements?** Rating 1–5.
2. **Did you get a clear understanding of the purpose of the application and its intended target audience?** Rating 1–5.
3. **Was it easy to find everything needed in the user interface to properly test the application?** Rating 1–5.
4. **Open feedback / comments.**
5. **At least one additional question chosen by that team.**

Confirm the lecturer can access your collected results, not just the blank form.

## Part 4 — Triage and fix (120–165 minutes)

Read your team's feedback. Create a short action list with finding, priority, owner, verifier, and decision.

Fix blockers and essential-task defects first. Review each change and retest the affected journey. Mark suggestions that will be deferred and explain why. Preserve feedback evidence and avoid starting large optional work.

## Part 5 — Reflect and assign final actions (165–180 minutes)

Hold a short retrospective: what changed from the proposal, what helped collaboration, what each member learned, and what remains. Assign final-window tasks and confirm submission responsibility.

## Final 48-hour window

- [ ] Complete priority fixes and regression checks.
- [ ] Verify five integration and five E2E tests and document how to run them.
- [ ] Finish README/setup/feature/testing instructions.
- [ ] Link designs, usability improvements, technical checks, contributions, AI records, and feedback results.
- [ ] Publish the final GitHub release with post-feedback fixes and known limitations.
- [ ] Verify public deployment matches the submitted release.
- [ ] Submit the release link through the designated LMS point by the published deadline.

Use the full [delivery checklist](../../reviews_and_delivery.md). The application must be publicly accessible at assessment.

**If a critical issue remains:** record its impact, evidence, and next action, and tell the lecturer. Do not claim a pending fix or test is complete.
**Evidence to keep:** presentation materials, peer responses, action decisions, retest results, retrospective, final release, and submission link.
