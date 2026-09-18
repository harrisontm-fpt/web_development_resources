# Checkpoints, testing, presentation, and delivery

Use these checklists alongside the [final assignment](../syllabus/final_assignment.md). The proposal and two formal reviews are **mandatory and ungraded**; additional check-ins are formative. Final work, including the presentation and supporting evidence, informs one course grade: **1–5 for passing work, 0 for failure**. These checklists do not introduce percentage weights or separate milestone marks.

## Milestone calendar

| Session / timing | Milestone | Evidence to show |
| --- | --- | --- |
| 2, week 1 | Setup check | Shared board/repository, team agreement, individual Git workflow practice |
| 4, week 2 | Scope/design check | Prioritised MVP, exclusions, mobile/desktop wireframes, first feedback |
| Before 5, week 3 | Mandatory proposal | Completed [proposal](project_proposal.md), accessible to lecturer |
| 7, week 4 | Component/design check | React screen and component structure based on wireframes |
| 8, week 4 | Mandatory checkpoint 1 | Narrow working feature, backlog, contributions, risks, next steps |
| 10, week 5 | MVP/usability check | Essential journeys, user observations, prioritised improvements |
| 12, week 6 | Test-readiness check | Running integration/E2E examples and plan to complete both suites |
| 14, week 7 | Mandatory checkpoint 2 | Deployed MVP, tests, usability changes, remaining defects |
| 15, week 8 | Readiness check | Rehearsal, working deployment, README, feedback form, evidence access |
| 16, week 8 | Presentation and peer testing | Demonstration, answers, tests of both other applications, feedback |
| 48 hours after session 16 ends | Final delivery | GitHub release and public application with final supporting evidence |

The lecturer publishes the exact final date, time, and timezone in the LMS before teaching begins.

## Formal review format

Every member attends and explains their contribution. Bring the running application, Trello board, repository, and relevant evidence. Use a **20-minute slot per team**:

- **0–6 minutes:** Demonstrate the actual completed work against acceptance criteria.
- **6–11 minutes:** Each member explains contributions, decisions, and evidence.
- **11–16 minutes:** Discuss blockers, risks, usability/testing findings, and scope.
- **16–20 minutes:** Agree next steps, owners, and deadlines; lecturer records feedback.

For session 8, reviews occupy the final project hour. For session 14, reviews occupy the first studio hour. Teams not meeting the lecturer continue their own work. Missing evidence results in a recovery action, not a separate numerical mark.

### Checkpoint 1 — session 8, week 4

- [ ] Revised proposal identifies users, agreed MVP, and exclusions.
- [ ] Trello shows realistic priorities, owners, and current blockers.
- [ ] Wireframes and first feedback are available.
- [ ] One narrow React → Express → SQL journey can be demonstrated, such as displaying records.
- [ ] Deployment has been attempted and its result or blocker is documented.
- [ ] Every member can explain technical work and provide contribution evidence.
- [ ] The team has a feasible next objective and knows what to defer.

A complete MVP is not expected yet. Identify whether an incomplete feature is blocked by knowledge, integration, access, or unclear requirements and agree an appropriate next action.

### Checkpoint 2 — session 14, week 7

- [ ] Deployed MVP addresses the agreed client minimum requirements, or gaps are explicitly listed.
- [ ] Core journeys persist data and handle relevant errors.
- [ ] Five integration tests and five E2E tests run, with results available; any shortfall has a specific recovery plan.
- [ ] Usability findings and implemented improvements are recorded.
- [ ] Responsive, keyboard, security, Lighthouse, and HTML/CSS checks have been reviewed.
- [ ] README and contribution/AI records are substantially complete.
- [ ] New feature work is frozen; remaining requirements and defects have priorities, owners, and deadlines.
- [ ] Every member can demonstrate and explain their contribution.

### Lecturer feedback / team action record

| Review / date | Evidence reviewed | Strength or issue | Action | Owner | Due | Completion evidence |
| --- | --- | --- | --- | --- | --- | --- |
| | | | | | | |

## Test evidence

The final assignment requires **at least five integration tests and five E2E tests**. Choose scenarios meaningful to your brief rather than counting trivial assertions. A test with several assertions is still one scenario; browser runs of the same scenario do not create additional distinct scenarios.

Use the [WSK testing material](../reference_materials/WSK-main/project/testing.md) for Jest/Supertest and Playwright. For the taught integration flow, exercise the real route, logic, and SQL interaction using an isolated test database and repeatable setup/cleanup. E2E tests should exercise observable user behaviour in the application. Keep test data separate from client/production data.

| Requirement / journey | Test level | Scenario and expected outcome | Test file / name | Latest result / build | Defect link |
| --- | --- | --- | --- | --- | --- |
| | Integration / E2E | | | | |

Possible scenarios to adapt, not additional feature requirements:

| Integration examples | E2E examples |
| --- | --- |
| Retrieve persisted records with expected fields | Open a list and view the correct details |
| Create valid data and verify persistence | Submit a valid form and see the saved result |
| Reject invalid input without storing it | Correct invalid input and successfully retry |
| Update an existing record and verify the result | Change data through the UI and confirm it after reload |
| Handle a missing record or deny a protected operation | Complete a filter/search/empty-state or permitted-access journey |

Use privileged-operation scenarios only where the project needs such operations. Test success and relevant failures, and document how to run the suites locally.

### Manual release audit — session 13

- [ ] Public deployment loads and can reach its API/database.
- [ ] HTTPS, environment variables, server-side validation, parameterised SQL, and access control are checked where applicable.
- [ ] Secrets are not exposed in source or browser configuration.
- [ ] Core journeys work with the deployed configuration and representative data.
- [ ] Lighthouse results are saved with page, date, and build details; findings are reviewed.
- [ ] HTML and CSS validation findings are reviewed, corrected, or explained.
- [ ] Mobile layout, keyboard use, focus, form labels, and feedback are checked manually.
- [ ] Setup instructions have been tried by someone other than their author.
- [ ] Logs and failure messages provide enough information to diagnose deployment problems without exposing sensitive values.

Record a finding, action, and retest result rather than only a score or screenshot. No arbitrary Lighthouse pass score is added to the assignment.

## Presentation checklist

Each team has **less than 10 minutes to present**, followed by approximately **five minutes of questions**. All members participate. Slides are optional; the project README may be used instead.

A suggested nine-minute structure:

| Time | Content |
| --- | --- |
| 0–1 minute | Team, problem, intended users, and value |
| 1–2 minutes | Main features and scope |
| 2–6 minutes | Demonstrate the main working journeys |
| 6–8 minutes | Explain how to test the application and find its major features |
| 8–9 minutes | Briefly explain contributions, key decisions, and known limitations |

Prepare representative demonstration data, the public URL, and an accessible README. Rehearse in session 15. If deployment fails during the presentation, explain the failure honestly and use a local demonstration to show progress; this does not replace the requirement for public accessibility at final assessment.

## Peer testing and feedback

Prepare your Google Form or equivalent before session 16. Provide the test application URL, feature/testing instructions, and form link. Test accounts, if needed, should be intended for demonstration rather than sharing administrator secrets.

| Round | Team A tests | Team B tests | Team C tests |
| --- | --- | --- | --- |
| 1 — 25 minutes | B | C | A |
| 2 — 25 minutes | C | A | B |

Use the final 10 minutes of hour 2 to complete feedback. Team members may divide tasks during a round. Each team tests both other applications.

The form must contain these questions from the final assignment:

1. **Was the repository's `README.md` clear and did it meet the requirements?** Rating: **1–5**.
2. **Did you get a clear understanding of the purpose of the application and its intended target audience?** Rating: **1–5**.
3. **Was it easy to find everything needed in the user interface to properly test the application?** Rating: **1–5**.
4. **Open feedback / comments.**
5. **At least one additional question of your own choice**, linked to a core project task.

Share a results link the lecturer can access; a form-response link alone is not enough. Record which findings will be fixed and which remain limitations. Use hour 3 for triage, priority fixes, and the retrospective, then the 48-hour final window for remaining priority actions.

### Final retrospective

- What did we deliver compared with the proposal, and why did scope change?
- Which team practice helped most, and which would we change?
- What did each member learn or become able to explain?
- What remains incomplete, and what would the next team need to know?

## Final delivery checklist

**Deadline: 48 hours after session 16 ends.** Follow the published LMS date/time/timezone.

- [ ] Agreed minimum requirements and final-assignment technical requirements are met.
- [ ] Public application is accessible and matches the submitted release.
- [ ] A GitHub release identifies the final version and includes priority post-feedback fixes and known limitations.
- [ ] The release link is submitted through the designated LMS submission point.
- [ ] README explains the idea, audience, value, main features, and public application URL.
- [ ] README provides local installation, environment, database, and startup instructions without exposing credentials.
- [ ] README explains how to test the application and find all major features.
- [ ] At least five integration tests and five E2E tests are included, with run instructions and results for the submitted version.
- [ ] Wireframes/designs, usability feedback, improvements, Lighthouse, and HTML/CSS validation evidence are easy to find.
- [ ] Feedback form and lecturer-accessible results link are included.
- [ ] Contributions and AI use are documented, and every member can explain submitted work.
- [ ] Priority fixes have been retested and known limitations are documented.

## Assessing final work

Use the syllabus and final assignment's existing grade descriptors. Grades **1–2** reflect satisfactory delivery of minimum requirements; **3–5** reflect increasing quality, robustness, completeness, and demonstrated understanding. Optional features are opportunities, not a checklist that automatically earns a higher grade.

| Evidence area | What the lecturer considers |
| --- | --- |
| Functionality and implementation | Agreed requirements, complete journeys, self-developed backend, SQL persistence, maintainable code |
| Design and user experience | Audience fit, responsive design, wireframes, user observations, evidence of improvement |
| Quality and delivery | Meaningful tests, security, deployment, reproducible setup, documentation, release evidence |
| Explanation and contribution | Presentation, answers, individual technical understanding, code/review/design/testing evidence |

Record an overall grade rationale against these areas and the official descriptors. Do not convert check-in completion or commit counts into percentage scores. The lecturer may use individual questions to establish understanding and contribution.
