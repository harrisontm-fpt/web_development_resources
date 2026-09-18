# Session 03 — Requirements and keeping scope feasible

[Session index](../README.md) · [Student workshop](workshop.md)

**Week 2 · Lecture: 60 minutes**

## Learning goals

Turn a brief into user stories and acceptance criteria, distinguish must-haves from optional work, and respond to scope changes using evidence.

## Teaching sequence

| Minutes | Focus |
| --- | --- |
| 0–10 | Retrieve the project problem and identify assumptions |
| 10–25 | User stories and observable acceptance criteria |
| 25–40 | MVP, MoSCoW, and scope boundaries |
| 40–50 | Estimates, dependencies, and risks |
| 50–60 | Work through a change request and discuss tradeoffs |

## Requirements describe needed behaviour

A requirement connects a user need to observable application behaviour. “Use React” is a technical constraint; “a visitor can find an activity's attendance instructions” is functional behaviour. Both matter, but they answer different questions.

A user story is a conversation aid:
**As a visitor, I want to filter activities by date so that I can find something I can attend.**

Acceptance criteria explain what would convince us the story is complete:

- Matching activities show their title and date.
- The selected date is visible.
- No matches produces a clear empty state.
- Resetting the filter restores the unfiltered list.

Avoid making the criteria a list of implementation steps. “Create Filter.jsx” does not establish that a user can filter. Later, these criteria become manual and automated test scenarios.

## Define the smallest useful delivery

The MVP is a coherent usable version meeting agreed minimum requirements. It includes necessary design, testing, and delivery work. It is not simply whichever features are easiest to build.

Use MoSCoW:
| Priority | Meaning for this project |
| --- | --- |
| Must | Essential to agreed delivery; missing it prevents meeting the baseline |
| Should | Valuable next work after essentials are secure |
| Could | Optional improvement if time remains |
| Won't this time | Explicitly excluded from this delivery |

Do not silently relabel a client minimum as optional. If it is infeasible, explain the impact and seek an explicit scope agreement with the client and lecturer.

For the campus example, browsing activities and attendance details might be essential. Online payment could be an exclusion. Actual priorities depend on the brief, not on this example.

## Estimate against capacity

Suppose three students each have six independent hours available this week: 18 hours total. That is not 18 hours of uninterrupted coding. Reviews, meetings, testing, and integration also consume time. Record those tasks and reserve some capacity for uncertainty.

Estimate a small task with a range and an uncertainty note: “2–3 hours if the endpoint already returns the required fields.” A dependency is work or access needed first. A risk is something uncertain that could affect delivery. A blocker is already preventing progress.

Investigate a risky assumption through a short experiment: demonstrate one database query or verify deployment access. Record the result before making a large commitment.

## Worked scope change

A client asks for email reminders in week 5. Ask which user problem they solve, estimate setup and testing, identify external-service dependencies, and explain what work would be delayed. Offer a documented choice about inclusion or deferral. “Yes, we can add that” without discussing consequences conceals the tradeoff.

**Check understanding:** Can an MVP omit required testing? No, testing is part of the delivery baseline. Is every client suggestion a must-have? Clarify its status. Can a large task be “90% done” for weeks? Yes; split it into demonstrable outcomes to expose remaining work.

## Preparation and reading

Lecturer: bring one vague request and one deliberately over-scoped backlog for discussion.

- [Proposal template](../../project_proposal.md)
- [Scope and weekly planning](../../project_management.md)
- [Final assignment requirements](../../../syllabus/final_assignment.md)
