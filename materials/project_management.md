# Teamwork and project management workbook

Use this workbook in sessions 1–3 and throughout the project. Copy the relevant sections into your team repository or shared workspace and link them from the README. These records support collaboration and formative feedback; they are not separately graded.

## Team agreement — session 1

| Item | Team agreement |
| --- | --- |
| Project, team members, client contact | |
| Shared repository and Trello links | |
| Communication channel and expected response time | |
| Weekly meeting time and each member's available hours | |
| How we notify the team about absence or a blocker | |
| How we make decisions and resolve disagreements | |
| When we ask the lecturer/client for help | |
| How we review code and share unfamiliar work | |
| Where we record design, testing, contributions, and AI use | |

Rotate coordination and review responsibilities weekly. Everyone contributes technical work and reviews or tests someone else's work; do not permanently divide the team into one coder, one designer, and one presenter. Agree ownership of tasks while sharing knowledge of the whole application.

## Trello setup

Create these lists: **Backlog → Ready → In progress → Review/Test → Done**. Use a visible **Blocked** label, retaining the card in its current list. A blocked card records the problem, the person following it up, and the next action.

- **Backlog:** possible work, including unconfirmed ideas and stretch features.
- **Ready:** clear acceptance criteria, dependencies understood, and small enough to start.
- **In progress:** actively being worked on. Start with a limit of one active implementation card per person; finish or unblock work before starting more.
- **Review/Test:** implementation exists and someone else checks it.
- **Done:** meets the team's definition of done below.

### Card template

```text
Title: [Verb + observable outcome]
User story: As a [user], I want [capability], so that [benefit].
Priority: Must / Should / Could / Won't this time
Owner:
Reviewer:
Acceptance criteria:
-
-
Estimate and uncertainty:
Dependencies:
Evidence: [PR, design, test, or documentation link]
Blocker / next action, if any:
```

Example: “Visitor filters upcoming activities by date.” Acceptance criteria might include showing only matching activities, displaying an understandable empty state, and resetting the filter to show all upcoming activities. Split UI, API, and data work into small linked tasks where useful, while preserving the end-to-end user outcome.

## Git workshop — session 2

Use a disposable practice repository for the deliberate conflict. Do the workflow through your normal Git tools; be able to explain each operation.

1. Clone the practice repository and create an individual branch.
2. Make a small README change, inspect the diff, and commit it with a descriptive message.
3. Push the branch and open a pull request explaining the change and how it was checked.
4. Review a teammate's pull request. Ask a useful question or verify its behaviour before merging.
5. In two branches based on the same starting commit, change the same line differently. Merge one, then resolve the other conflict by agreeing the intended combined result.
6. Recheck the resolved content and explain why the resolution is correct. Do not simply discard a teammate's version to clear the conflict.
7. Apply the collaboration workflow to the real project, without introducing a deliberate conflict there.

For project work, keep branches small, link pull requests to cards, and keep the main branch usable. Inspect changes before committing and keep credentials and local environment files out of the repository. Share variable names and safe example configuration through an example environment file.

### Pull-request description

```text
Related card:
What user-facing outcome changed:
How I checked it:
Screenshots or test evidence, if relevant:
Known limitations / help needed:
```

## Scope and priorities

Use this section in session 3 and whenever a new requirement is proposed.

Use MoSCoW to separate **Must** (essential agreed requirements), **Should** (valuable next work), **Could** (optional improvements), and **Won't this time** (explicit exclusions). Client minimum requirements cannot simply be removed to make the plan easier; discuss feasibility and record any agreed changes.

Estimate small tasks using approximate hours and an uncertainty note. Compare the total with actual team availability and leave room for reviews, testing, integration, and fixes. Split tasks too large to demonstrate progress on during one or two working blocks. Track dependencies such as client content, API access, or database setup.

### Scope-change record

| Date / request | Requester and reason | Effect on effort, dependencies, tests, and deadline | Work deferred or exchanged | Decision and agreement evidence | Owner |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

Record an assumption if a decision is pending. Continue independent work, and give the unresolved decision an owner and follow-up date. Changes to client minimum requirements need explicit agreement with the client and lecturer.

## Weekly planning and reflection

Complete this at the start of each week and revisit it in the second session.

| Planning item | Team entry |
| --- | --- |
| One observable weekly objective | |
| Available hours per member | |
| Selected cards and owners | |
| Dependencies and likely blockers | |
| How we will demonstrate completion | |
| Actual outcome and evidence | |
| What helped / what slowed us down | |
| One process change for next week | |

Use the project-hour routine: **5 minutes to agree the immediate goal, 45 minutes to work, 10 minutes to update the board and next actions**. The lecturer may replace this routine with a scheduled review.

## Definition of done

- [ ] Acceptance criteria met, including relevant empty/error cases.
- [ ] Another member has reviewed or tested the work.
- [ ] Appropriate checks pass; relevant automated tests are added or updated as the suite develops.
- [ ] Relevant UI is usable at the intended screen sizes and with keyboard interaction.
- [ ] Code is integrated without breaking existing functionality.
- [ ] Necessary setup, API, feature, or design documentation is updated.
- [ ] The card links to evidence and any remaining work has its own card.

## Contribution and AI-use records

| Week | Member | Contribution and learning | Evidence: code/review/design/test/docs | Next responsibility |
| --- | --- | --- | --- | --- |
| | | | | |

Contribution is broader than commit count. Record collaboration and review work as well as implementation. Every member should be able to explain the application's main flow and their own technical decisions.

| Date / tool | Task and example prompt | Relevant output or link | How it was checked, changed, and used | Affected files/features |
| --- | --- | --- | --- | --- |
| | | | | |

Follow the [syllabus AI policy](../syllabus/syllabus.md): understand all submitted code, acknowledge AI use, retain relevant prompt/output examples, and acknowledge AI assistance for core application logic in source comments. Do not use AI to generate the entire project.
