# Session 14 — Checkpoint 2 and support studio

[Session index](../README.md) · [Student workshop](workshop.md)

**Week 7 · Three-hour studio · Mandatory ungraded checkpoint 2**
**These are briefing and support notes, not an additional one-hour lecture.**

## Learning goals

Demonstrate a release candidate against requirements, explain individual contributions, and turn review findings into a realistic final action plan.

## Studio schedule

| Minutes | Activity |
| --- | --- |
| 0–20 | Team A review; B and C continue project work |
| 20–40 | Team B review; A and C continue project work |
| 40–60 | Team C review; A and B continue project work |
| 60–180 | Targeted support, fixes, verification, and documentation |

Use the ideas below during team reviews and short support conversations. Do not consume the studio with a replacement general lecture.

## Evidence is stronger than a progress claim

“We are nearly finished” gives little information about risk. A more useful statement is: “All three must-have journeys work on the deployed version; one E2E scenario fails on invalid input; the README setup was checked by a teammate.”

Connect each claim to evidence: a live journey, test result, linked design improvement, reviewed change, or reproducible setup. Name the build used for tests and the code deployed. Evidence from an earlier build may still be informative, but do not present it as verification of a later change without checking the affected behaviour.

Checkpoint 2 expects a deployed MVP, five integration tests, five E2E tests, usability improvements, and a clear remaining-work list. Gaps become a recovery plan. The checkpoint is mandatory and ungraded; it does not earn a percentage of the final grade.

## Explain individual understanding

Each member should describe technical work they implemented or substantially contributed to, a decision behind it, and how it was checked. A commit count cannot establish quality or understanding. Pair work, reviews, tests, design, and documentation can provide additional evidence.

A useful explanation follows a concrete input through the application: what the user does, what the browser sends, what the server checks, how data is stored/retrieved, and what is displayed. Follow-up questions can focus on error handling or a tradeoff rather than memorised definitions.

## Diagnose the kind of remaining problem

| Problem | Useful next step |
| --- | --- |
| Unclear requirement | Record the decision needed, owner, and client/lecturer follow-up |
| Incorrect implementation | Reproduce with a small request or user journey; fix and retest |
| Environment failure | Compare configuration and logs with the last working deployment |
| Missing evidence | Produce the required check/documentation and link it |
| Too much unfinished work | Prioritise essentials, defer optional work, and discuss any threatened minimum |

One action should identify an outcome, owner, due time, and verification. “Improve testing” is vague; “add the rejected-input integration scenario and show it passes on the candidate” is actionable.

## Worked triage conversation

A team has an attractive dashboard but its required save operation fails publicly. They also want to add an animation. Restore the save operation first, verify persistence, rerun affected tests, and update the candidate. Defer animation. If a must-have remains infeasible, document the impact and seek an explicit agreement rather than hiding the gap.

## Questions for support conversations

- Which acceptance criterion is at risk?
- What evidence locates the failing layer?
- What is the smallest change likely to resolve it?
- Who will independently verify the fix?
- What optional task will you stop doing to make room?

## Preparation and follow-through

Lecturer: open review records and accessible project links before class. Keep each team's review to 20 minutes and return a short action list. During support time, circulate according to blocker impact while leaving teams ownership of the work.

- [Formal review format and checklist](../../reviews_and_delivery.md)
- [Scope-change and contribution records](../../project_management.md)

Before session 15, teams should address review actions, make setup instructions reproducible, and prepare their demonstration and feedback form.
