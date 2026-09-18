# Session 05 — From proposal to implementation

[Session index](../README.md) · [Student workshop](workshop.md)

**Week 3 · Lecture: 60 minutes · Proposal due before class, mandatory and ungraded**

## Learning goals

Turn proposal commitments into a realistic weekly objective, split work across the stack, and agree what evidence will establish completion.

## Teaching sequence

| Minutes | Focus |
| --- | --- |
| 0–10 | Retrieve MVP, capacity, and the highest-risk assumption |
| 10–25 | Split a user story into small implementation tasks |
| 25–40 | Coordinate frontend, API, and database responsibilities |
| 40–50 | Definition of done and uncertainty |
| 50–60 | Walk through the proposal clinic and discuss questions |

## Plan a demonstrable increment

A proposal describes intended delivery; a working backlog explains what happens next. Select an outcome such as “a visitor can see stored activities” and identify what prevents it today.

“Build backend” and “do frontend” conceal dependencies. Smaller tasks might be:

- Agree fields and an example API response.
- Create the activities table and representative records.
- Implement a read route with an error response.
- Render the response in a list.
- Check the complete journey and update setup instructions.

These tasks support one connected outcome. Do not postpone all integration until each layer is supposedly complete.

## Agree the interface before parallel work

A simple contract describes a request and its response:

~~~text
GET /api/activities
Success: 200 with [{ id: 1, title: "Board games", details: "Meet in Room A" }]
Empty collection: 200 with []
Failure: 500 with { error: "Unable to load activities." }
~~~

Frontend and backend developers can work from the same example. If one returns activity_name and another reads title, each part can look correct in isolation while the application fails. Record field changes and tell affected teammates.

Draw **browser → Express route → SQL query → response → React screen**. Explain where validation, persistence, and presentation belong. Frontend validation helps users; the server still checks inputs. Browser code must not connect directly to the SQL database.

## Ownership with collaboration

An owner coordinates completion; a reviewer checks the result. Pair across unfamiliar areas and rotate who drives. Avoid assigning one person all integration responsibility at the end.

Compare commitments with this week's actual availability. Leave time for review, testing, and unexpected setup problems. If a task cannot fit, reduce the next increment while preserving the agreed final requirements, or raise a scope decision explicitly.

## Define done before starting

A definition of done is a shared quality agreement. For a feature it can include met acceptance criteria, a teammate's review, relevant checks, integration, and necessary documentation. It does not mean every small card needs every possible kind of test. Match checks to the work and expand automated coverage as the course progresses.

A technical experiment has a different finish condition: a demonstrated result and a decision. “Investigate hosting” is incomplete until the team records whether deployment works, what it requires, and the next action.

## Worked example: a blocked dependency

The client has not supplied final activity descriptions. The team can still agree the response shape, use clearly marked sample records, and design the display. Assign an owner and date to obtain real content. Sample data tests technical feasibility; it does not prove the client content requirement is complete.

**Check understanding:** Who owns a changed API field? The team must coordinate all consumers, even if one person edits it. Is “done on my laptop” enough for the connected feature? No: show the agreed integrated outcome.

## Clinic preparation and reading

The workshop contains three 15-minute team clinics and 15 minutes of shared feedback. Explain users, scope, feasibility, risk, and next objective. Receive an action list rather than a mark.

- [Proposal template](../../project_proposal.md)
- [Definition of done and weekly cycle](../../project_management.md)
- [WSK client/server architecture](../../../reference_materials/WSK-main/Week1/architecture.md)
