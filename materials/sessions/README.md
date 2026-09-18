# Session materials

[Course plan](../course_plan.md) · [Course syllabus](../../syllabus/syllabus.md) · [Final assignment](../../syllabus/final_assignment.md)

Each session directory contains **lecture.md** and **workshop.md**. Lecture notes contain explanations, worked examples, discussion checks, and preparation. Student workshops contain timed steps, expected evidence, troubleshooting, and project follow-through.

Sessions 1–13 have a 60-minute lecture, 60-minute workshop, and 60-minute project block. Sessions 14–15 use all 180 minutes for reviews/support; their lecture files contain briefing and clinic notes. Session 16 uses 180 minutes for presentations, peer testing, fixes, and reflection, with its lecture file providing facilitation notes. Do not add a lecture hour to these final three sessions.

## Session directory

| Week | Session | Lecture / briefing | Student workshop |
| --- | --- | --- | --- |
| 1 | 01 — Starting a team project | [Lecture notes](session-01/lecture.md) | [Workshop](session-01/workshop.md) |
| 1 | 02 — Git and collaboration | [Lecture notes](session-02/lecture.md) | [Workshop](session-02/workshop.md) |
| 2 | 03 — Requirements and scope | [Lecture notes](session-03/lecture.md) | [Workshop](session-03/workshop.md) |
| 2 | 04 — UX discovery and wireframes | [Lecture notes](session-04/lecture.md) | [Workshop](session-04/workshop.md) |
| 3 | 05 — From proposal to implementation | [Lecture notes](session-05/lecture.md) | [Workshop](session-05/workshop.md) |
| 3 | 06 — Backend, data, and deployment | [Lecture notes](session-06/lecture.md) | [Workshop](session-06/workshop.md) |
| 4 | 07 — Turning wireframes into React | [Lecture notes](session-07/lecture.md) | [Workshop](session-07/workshop.md) |
| 4 | 08 — Connecting the application | [Lecture notes](session-08/lecture.md) | [Workshop](session-08/workshop.md) |
| 5 | 09 — React forms and complete features | [Lecture notes](session-09/lecture.md) | [Workshop](session-09/workshop.md) |
| 5 | 10 — UI quality and usability testing | [Lecture notes](session-10/lecture.md) | [Workshop](session-10/workshop.md) |
| 6 | 11 — Integration testing | [Lecture notes](session-11/lecture.md) | [Workshop](session-11/workshop.md) |
| 6 | 12 — End-to-end testing | [Lecture notes](session-12/lecture.md) | [Workshop](session-12/workshop.md) |
| 7 | 13 — Release readiness and handover | [Lecture notes](session-13/lecture.md) | [Workshop](session-13/workshop.md) |
| 7 | 14 — Checkpoint 2 and support studio | [Lecture notes](session-14/lecture.md) | [Workshop](session-14/workshop.md) |
| 8 | 15 — Final delivery studio | [Lecture notes](session-15/lecture.md) | [Workshop](session-15/workshop.md) |
| 8 | 16 — Presentations and peer evaluation | [Lecture notes](session-16/lecture.md) | [Workshop](session-16/workshop.md) |

## How to use the materials

- Apply activities to the real team briefs. The campus activities example provides continuity when a shared demonstration is useful; its features are not extra project requirements.
- Begin with the working environment and dependency versions used in the adjacent WSK course. Backend examples use JavaScript ES modules, Express, and mysql2; React examples use the WSK Vite setup. Test examples use Jest/Supertest and Playwright. The lecturer should rehearse code and deployment in the class environment before teaching.
- Complete-file code examples identify filenames and dependencies. Isolated patterns are labelled; they are not a complete application scaffold. In particular, the session 6 demo is read-only: session 9 requires a separately implemented, validated, appropriately protected POST endpoint.
- Keep development/test data separate from client data. Record configuration names and instructions without committing secrets.
- Record workshop evidence in the team's repository/shared workspace and link it from the README. Counts suggested to organise an exercise are not additional graded feature requirements.
- Independent follow-up uses the course's six or more hours per week; it is not an additional six hours per workshop. Coordinate within-week technical prerequisites with WSK.

## Milestones

The proposal is due before session 5. Formal reviews occur in sessions 8 and 14, with all team members attending. These are mandatory and ungraded; other check-ins provide formative feedback. The presentation and final project evidence inform the final 1–5 passing grade, with 0 for failure.

The final GitHub release is due **48 hours after session 16 ends**. Use the calendar date, time, and timezone published in the LMS. The final assignment requires at least **five integration tests and five E2E tests**, public deployment, design/user feedback, technical checks, documentation, and evidence of contributions and AI use.

## Shared templates

- [Team agreement, Git, Trello, and scope](../project_management.md)
- [Project proposal](../project_proposal.md)
- [UX and usability workbook](../ux_workbook.md)
- [Reviews and final delivery](../reviews_and_delivery.md)
