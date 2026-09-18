# Web Project: eight-week course plan

**TX00EY24 · 16 sessions · 48 contact hours · three teams and three client briefs**

This project studio runs alongside [WSK](../reference_materials/WSK-main/README.md). Students apply its technical lessons while learning to define, organise, design, test, and deliver a useful full-stack application. The [syllabus](../syllabus/syllabus.md) and [final assignment](../syllabus/final_assignment.md) specify course and assessment requirements.

## Learning outcomes

The [session materials index](sessions/README.md) links to a lecture/briefing file and a student workshop for each of the 16 sessions. These expand the schedule below into teaching explanations, worked examples, timed activities, and evidence checklists.

By the end of the course, students should be able to:

1. Translate a client brief into a feasible MVP, user stories, acceptance criteria, and a prioritised plan.
2. Collaborate using Trello, Git, reviews, clear responsibilities, and evidence of individual contributions.
3. Identify users, prototype important journeys, and improve responsive interfaces using feedback.
4. Apply React, Express, REST, and SQL to implement and explain complete user journeys.
5. Test, deploy, document, demonstrate, and hand over the application.

## Teaching format and preparation

Sessions 1–13 contain a 60-minute lecture, 60-minute workshop, and 60-minute project block. Use the lecture hour for approximately 10 minutes of retrieval/discussion, 30 minutes of explanation and demonstration, and 20 minutes of worked examples and questions. Workshops produce project artifacts rather than unrelated submissions.

For ordinary project blocks, use **5 minutes to agree the immediate objective, 45 minutes of focused work, and 10 minutes for board updates and next actions**. Reviews replace this routine where indicated. Teams set a weekly objective in the first session and briefly demonstrate progress and reflect in the second; use the opening/closing portions of existing blocks.

Sessions 14–15 are three-hour studios. Session 16 is a three-hour presentation and peer-evaluation session. The allocation is **13 lecture hours + 32 assisted workshop/studio hours + 3 presentation/peer-evaluation hours = 48 contact hours**. Students also budget **at least six hours of independent work each week**; weekly tasks below share that budget rather than adding separate six-hour requirements.

Before teaching:

- Obtain usable briefs by the end of week 1. Identify a client contact, intended users, minimum requirements, and available content/data for each project.
- Coordinate with the WSK lecturer: backend/SQL in week 3, React basics in week 4, and forms/shared state in week 5. Within-week lessons should precede their project application where possible. If order differs, use a short worked example and the corresponding WSK reading to bridge the gap.
- Confirm access to GitHub, Trello, a shared wireframing tool or paper, Node tooling, SQL, and the institution-supported deployment environment. Rehearse the deployment path and supply a concise setup sheet for that environment; do not spend project time comparing hosting providers.
- Prepare a disposable Git conflict exercise, one minimal Express/SQL demonstration, one React API example, and integration/E2E demonstrations using the WSK materials. Keep demonstration data separate from real client data.
- Publish review slots, the final submission date/time/timezone (48 hours after session 16 ends), and accessible repository/LMS submission instructions.

If a brief is not ready for the opening workshop, use this temporary practice scenario: **a campus club wants visitors to browse upcoming activities and an organiser to maintain activity information**. Students identify unknowns rather than inventing client commitments. Transfer the process to real briefs once available; record unresolved details as assumptions.

## Session schedule

| Week | Session | Lecture — 60 minutes | Workshop — 60 minutes | Project block — 60 minutes |
| --- | --- | --- | --- | --- |
| 1 | 1. Starting a team project | Client problems; lifecycle; Scrum concepts; weekly objectives; team responsibilities | Create a team agreement and Trello board; turn a brief into questions and tasks | Agree communication, availability, initial roles, and client questions |
| 1 | 2. Git and collaboration | Branches, commits, pull requests, reviews, conflicts; contribution and AI records | Each student branches, submits and reviews a change, and resolves a staged conflict | Set up the project repository and README; **setup check** |
| 2 | 3. Requirements and scope | Users, stories, acceptance criteria, MVP, MoSCoW, estimates, dependencies, and scope changes | Analyse real briefs; identify essential journeys, exclusions, and risks | Build a prioritised backlog and milestones; draft proposal |
| 2 | 4. UX discovery and wireframes | User needs, task flows, information architecture, wireframes/mock-ups, accessibility | Sketch mobile/desktop journeys; another team attempts a task using the prototype | Revise wireframes and proposal; **scope/design check** |
| 3 | 5. From proposal to implementation | Weekly planning, story splitting, capacity, dependencies, definition of done; frontend/API/database responsibilities | Three 15-minute proposal clinics plus 15 minutes of shared feedback | Revise scope and assign small tasks; **proposal due before class** |
| 3 | 6. Backend, data, and deployment | API contracts, SQL relationships, validation, parameterised queries, secrets, and environments | Build one SQL-backed endpoint, check valid/invalid requests, and demonstrate deployment | Adapt endpoint; establish reachable service and database connection |
| 4 | 7. Wireframes into React | Components, props, JSX, lists, state, and component boundaries | Turn a wireframe into reusable components using sample data | Build layout and first screen; **component/design check** |
| 4 | 8. Connecting the application | Fetching, effects, loading/empty/error states, and debugging across layers | Connect React to Express; exercise success and failure states | **Checkpoint 1:** three 20-minute reviews; other teams continue development |
| 5 | 9. React forms and complete features | Controlled forms, validation, routing, state ownership, custom hooks, appropriate context | Build a create/edit flow with success and failure feedback | Complete an essential UI/API/SQL journey; apply access control where needed |
| 5 | 10. UI quality and usability | Hierarchy, spacing, typography, responsive design, accessible forms, useful feedback | Task-based cross-team tests; mobile, keyboard, labels, and errors | Fix priority usability problems; **MVP/usability check** |
| 6 | 11. Integration testing | Test levels, acceptance criteria, assertions, test data, isolation | Test a real API/database interaction and invalid request with Jest/Supertest | Build toward **five integration tests**; track defects |
| 6 | 12. End-to-end testing | User journeys, reliable interactions, test data, failure diagnosis, regressions | Write a Playwright journey test and failure/recovery scenario | Build toward **five E2E tests**; **test-readiness check** |
| 7 | 13. Release readiness | Production configuration, HTTPS, security review, logs, database setup, README, releases | Audit deployment, tests, Lighthouse, HTML/CSS, and setup instructions | Deploy release candidate, freeze new features, prioritise defects |

| Week | Session | Three-hour studio / assessment format |
| --- | --- | --- |
| 7 | 14. Checkpoint 2 and support | Minutes 0–60: three 20-minute formal reviews while others work. Minutes 60–180: targeted support on agreed defects, remaining requirements, tests, and documentation. |
| 8 | 15. Final delivery studio | Minutes 0–15: release triage. Minutes 15–75: targeted fixes and lecturer support. Minutes 75–135: rehearsal and cross-team README checks. Minutes 135–180: fixes, evidence, and readiness check. |
| 8 | 16. Presentations and peer evaluation | Minutes 0–60: three presentations under 10 minutes each, approximately five minutes of questions per team, plus transitions. Minutes 60–110: two 25-minute testing rounds. Minutes 110–120: finish feedback. Minutes 120–165: triage and priority fixes. Minutes 165–180: retrospective and final submission actions. |

All classroom checks, the proposal, and formal reviews are **ungraded**. The proposal and both formal reviews are **mandatory**. The final presentation and delivered application inform one final course grade; there are no milestone percentages. Final delivery is due **48 hours after session 16 ends**.

## Workshop instructions and evidence

### Week 1 — Establish a working team

**Session 1:** Use the [project management workbook](project_management.md). Spend 15 workshop minutes identifying the problem and unknowns, 20 agreeing team practices, 15 building the board, and 10 comparing initial tasks. Exit evidence: team agreement, board link, and questions with a named follow-up owner. Teach Scrum concepts as a vocabulary for planning and review; use a lightweight weekly process suitable for three-person teams.

**Session 2:** Use a disposable repository for the conflict exercise. Spend 10 minutes demonstrating the workflow, 35 on student branch/PR/review/conflict practice, and 15 comparing resolutions. Exit evidence: each student can explain a reviewed change; the real project has shared access, a README, and an AI/contribution-record location. Do not use live client work to stage deliberate conflicts.

**Independent work:** Clarify the real brief, finish access/setup, and read selected WSK HTML/CSS and modern JavaScript refreshers according to need. Avoid assigning the entire reference course again.

### Week 2 — Define and design the MVP

**Session 3:** Spend 15 workshop minutes identifying users and journeys, 20 writing stories and observable acceptance criteria, 15 prioritising/estimating, and 10 recording risks and exclusions. Use the [proposal template](project_proposal.md). Exit evidence: a feasible must-have backlog separated from stretch features. An estimate should expose uncertainty and available capacity, not promise precision.

**Session 4:** Use the [UX workbook](ux_workbook.md): 10 minutes on a task flow, 25 on low-fidelity mobile/desktop wireframes, 15 testing with another team, and 10 revising. Exit evidence: linked wireframes and at least one observation-driven revision. A polished visual design is not needed yet.

**Independent work:** Clarify essential client requirements, complete the proposal before session 5, and refine wireframes. Keep open questions and assumptions visible rather than delaying all progress.

### Week 3 — Establish technical feasibility

**Session 5:** While one team meets the lecturer, the other teams split stories and prepare implementation tasks. Clinic discussion covers problem/users, must-haves, exclusions, technical feasibility, risks, and individual workload. Give each team an action list. Exit evidence: a revised proposal and achievable weekly objective.

**Session 6:** Keep the technical exercise to one entity and one useful endpoint. Spend 10 workshop minutes agreeing request/response examples, 30 implementing the query/route, 10 checking a valid and invalid request, and 10 observing deployment. Connect the chosen route to the project's data model. Introduce the distinction between checking requests manually now and automating these checks later. Exit evidence: one SQL-backed endpoint, a documented API example, and a recorded deployment URL or concrete blocker/owner.

**Independent work:** Finish backend setup and the first endpoint; test deployment access. Reuse WSK authentication/validation learning where needed. Login is brief-dependent; any privileged operation must have appropriate server-side protection.

### Week 4 — Build the first connected feature

**Session 7:** Spend 10 workshop minutes marking component boundaries on a wireframe, 35 building the static screen, and 15 adding a small stateful interaction. Exit evidence: a usable screen and a component sketch students can explain. Focus on function components and updates through state setters.

**Session 8:** Spend 15 workshop minutes tracing the data flow, 25 connecting the screen to a project endpoint, and 20 exercising empty/error/loading states. Hold checkpoint 1 in the project hour using the [review guide](reviews_and_delivery.md). Expect a narrow journey such as SQL records displayed through Express in React, not a complete MVP. Review gaps receive a recovery action and owner, not a milestone mark.

**Independent work:** Act on checkpoint feedback, finish the connected feature, and prepare the next essential form or interaction. Keep the main branch usable through small reviewed changes.

### Week 5 — Complete journeys and improve usability

**Session 9:** Spend 10 workshop minutes defining form behaviour, 35 implementing the flow, and 15 checking validation and recovery. Teach state ownership before shared context; add custom hooks only when they simplify actual reuse. Exit evidence: the user can complete a meaningful create/edit action with persisted data and understandable feedback.

**Session 10:** Spend 10 workshop minutes preparing neutral tasks, 30 observing another team use the application, and 20 prioritising findings. Separate task observations from aesthetic preferences. Revisit wireframes and record design changes. Exit evidence: testing notes and prioritised fixes, including responsive and keyboard checks.

**Independent work:** Finish must-have journeys and fix high-impact usability issues. Seek intended-user/client feedback where available; identify peer testers accurately if target users are unavailable.

### Week 6 — Make quality repeatable

**Session 11:** Spend 10 workshop minutes choosing behaviours, 35 writing integration tests, and 15 interpreting failures. Use a separate test database with repeatable setup/cleanup. At least the taught integration scenario should exercise the actual route, application logic, and SQL persistence; a mocked SQL call does not demonstrate database integration. Exit evidence: repeatable tests and a plan for the remaining required scenarios.

**Session 12:** Spend 10 workshop minutes translating a journey to test steps, 35 automating it, and 15 diagnosing a failure. Tests should check meaningful outcomes rather than just the presence of a heading. Exit evidence: repeatable E2E tests and a clear path to five integration plus five E2E tests by checkpoint 2. Use the [test matrix](reviews_and_delivery.md#test-evidence) to map tests to requirements.

**Independent work:** Complete the required suites, fix defects, and collect test results. Re-run affected checks after changes. Optional CI can automate the same checks once local tests are reliable.

### Week 7 — Stabilise and prepare delivery

**Session 13:** Spend 15 workshop minutes checking deployment/security, 15 running tests, 15 checking Lighthouse and HTML/CSS, and 15 following setup instructions. Exit evidence: a deployed release candidate, audit record, and prioritised defect list. Feature freeze means focus on completing agreed requirements and fixing defects; any scope change still needs documented impact and agreement.

**Session 14:** Follow checkpoint 2's 20-minute review format. Expect deployed must-haves, five integration and five E2E tests, usability evidence, and an honest remaining-work list. Give targeted support during the following two hours. Unfinished requirements trigger a concrete completion/recovery plan.

**Independent work:** Address review actions; make the README reproducible; prepare demo data, presentation, feedback form, and contribution/AI records.

### Week 8 — Demonstrate, evaluate, and hand over

**Session 15:** Rehearse against the under-10-minute limit and have another team follow the README without coaching. Check lecturer access to evidence and feedback results. Exit evidence: a ready demonstration, deployment, documentation, and submission checklist.

**Session 16:** Use the rotation and presentation checklist in the [delivery guide](reviews_and_delivery.md). All members participate in the presentation and questions. Test both other projects, record feedback, and decide which fixes fit the remaining time. Exit evidence: feedback results, prioritised actions, and a short retrospective.

**Independent work and final window:** Prepare before session 16, then use the following 48 hours for priority fixes, regression checks, release notes, and final release submission. The deployed application must match the submitted release and remain publicly accessible at assessment.

## Reference map and teaching boundaries

All WSK paths below are relative to its [reference-course index](../reference_materials/WSK-main/README.md).

| Course sessions | WSK resources to reuse | Project-course addition |
| --- | --- | --- |
| 1–2 | Week1 tools parts 1–2; selected Week2 JavaScript refreshers | Team agreement, Trello, shared Git workflow, contribution evidence |
| 3–4 | Week1 HTML, CSS, forms, responsive-design resources | Client discovery, scope, task flows, wireframes, prototype testing |
| 5–6 | Week3 server programming, Express, routing, database, authentication, validation; project/databases.md; project/cloud-deployment.md | Proposal clinic, small weekly objectives, project-specific API and data decisions |
| 7–8 | Week4 React start, state, routing, hooks | Implement team wireframes and integrate one real feature |
| 9–10 | Week5 forms, custom hooks, context; Week1 forms/responsiveness | Complete project journeys and task-based usability evaluation |
| 11–12 | [project/testing.md](../reference_materials/WSK-main/project/testing.md) | Map integration/E2E tests to project requirements and use isolated data |
| 13–16 | Project deployment/testing materials and relevant eCloud instructions | Release audit, reviews, handover, demonstration, peer feedback |

Use [Thinking in React](https://react.dev/learn/thinking-in-react) for component design and minimal state, the [W3C forms tutorial](https://www.w3.org/WAI/tutorials/forms/) for labels/instructions/feedback, and [Playwright best practices](https://playwright.dev/docs/best-practices) for tests of user-visible behaviour. Confirm example commands against the versions used in the adjacent WSK class before teaching them.

Keep advanced state libraries, elaborate animation, optional media uploads, and extensive infrastructure automation as brief-dependent extensions. Do not add features solely to pursue a higher grade. Protect time for the agreed MVP, security, testing, usability, and delivery.
