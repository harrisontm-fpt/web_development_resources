# VOV Staff Scheduling and Workload Management Project

## Project objective

Build an internal web application for VOV radio to assign programmes to staff, calculate their workload, and maintain a history for verification. Managers need a weekly schedule and a quarterly report showing the sessions assigned to each person, with monthly totals to help check whether they have earned the points required for their full monthly salary.

The client expects approximately two people to operate the system and proposes two access roles: **manager** and **viewer**. The number of operators does not determine the number of staff whose work can be scheduled.

This brief develops the supplied outline into a proposed minimum scope. Calculation and access assumptions are identified below for client clarification. Visual direction is provided in the separate [design brief](design_brief.md).

## Must have: minimum requirements — Grades 1–2

### Access and staff records

- Login and logout for all users; scheduling, reports, and history are internal content.
- **Manager:** maintain staff and programme records, assign sessions, correct entries, and view reports and history.
- **Viewer:** read schedules, reports, and history without changing data. The proposed minimum allows access to all staff workload records; VOV must confirm whether viewers need narrower access.
- Enforce permissions in the backend as well as the interface.
- Store a unique staff identifier, display name, and active/inactive status. Deactivating a staff member must preserve their previous work records.

### Weekly scheduling page

- Select a week and view its scheduled sessions and assigned personnel.
- Managers can add, view, edit, reassign, and cancel sessions.
- Organise sessions into the five supplied categories: **early morning, morning, afternoon, late afternoon, and night**. Exact time boundaries are to be supplied by VOV.
- Select a named programme from a maintained list or enter a one-off programme. Require a description when the programme differs from the usual programme for that slot.
- Copy the programme's agreed workload value into the session automatically, so reports do not require duplicate entry.
- Distinguish scheduled, completed, and cancelled sessions. As a proposed default, managers confirm completion before points count towards salary eligibility.

### What each session must record

| Information | Required content |
| --- | --- |
| Identity and timing | Unique session ID, date, start and end time, including an end date for overnight work |
| Programme | Programme name, one of the five categories, and a description for a one-off or replacement programme |
| Assignment | Responsible staff member; one person per session is the proposed minimum |
| Workload | Agreed credited points, plus credited hours if used by VOV; hours and points must remain separate units |
| State | Scheduled, completed, or cancelled |
| Verification | Creator, creation time, latest editor, and latest change time |

Programme records must hold a name, category, default workload value, and active/inactive status. Changes to programme defaults must not silently change values already stored against sessions. Managers must provide a reason when correcting an existing session's credited value.

### Quarterly workload and monthly eligibility page

- Select a staff member, year, and quarter, then list their sessions with dates, programmes, status, and credited workload.
- Automatically total completed sessions for each month and for the quarter. Display planned workload separately; cancelled sessions contribute no credited workload.
- For each month, show credited points, the applicable monthly target, any shortfall, and **target met** or **below target**. Show **target not configured** when no target is available.
- Managers can set the monthly target per staff member and month. This permits a common target without assuming that every person has the same requirement.
- Recalculate totals after a session is completed, corrected, reassigned, or cancelled, without counting a session twice.
- Allow the user to trace a total back to its contributing sessions.

**Salary boundary:** the minimum version calculates workload and whether the full-salary points target has been met. The supplied outline does not explain how to calculate a monetary salary, deductions, or extra pay. Do not assume that pay is proportional to points. Monetary salary calculation can be added once VOV supplies and confirms the rules.

### History and verification

- Provide a history section recording who changed what, when, and the previous and new values for assignments, session status, credited workload, programme defaults, and monthly targets.
- Allow history to be inspected for a session or staff member and date range.
- Preserve cancelled sessions and their history rather than permanently deleting evidence. Normal application users cannot edit or remove history records.

### Data and delivery

- Store staff, programmes, sessions, monthly targets, user roles, and history in an SQL database.
- Use the team's own REST API to retrieve data and perform authorised changes. Validate required fields, valid times, and non-negative workload values on the server.
- Support desktop and mobile use, with clear forms, readable reports, and useful error messages.
- Follow the shared [final assignment requirements](../../../syllabus/final_assignment.md), including the JavaScript/React frontend choices, Node.js/Express backend, design work, user feedback, documentation, and at least five integration tests and five E2E tests.
- Provide an internet-accessible assessment deployment with authenticated demonstration accounts and fictional staff data. Real VOV records remain within the agreed internal deployment.

## Grade expectations

| Grade | Expected outcome |
| --- | --- |
| **1** | All minimum requirements and shared assignment obligations work at a satisfactory level. Managers can schedule work, check totals, and verify changes. |
| **2** | The same scope is delivered more consistently, with clearer scheduling and reports, reliable calculations, better error handling, and improvements supported by feedback. There is no separate compulsory feature list for Grade 2. |
| **Greater than 2 (3–5)** | All minimum requirements are met, with increasing quality, robustness, completeness, and demonstrated understanding. Select useful extensions to develop the system further. |

Extensions do not automatically earn a grade. Teams do not need every extension to achieve Grade 5; the course's overall assessment criteria apply.

## Nice to have: prioritised extensions — Grades 3–5

These priorities are proposed for client review. Choose a manageable set after the minimum version works.

| Priority | Feature | Expected benefit or behaviour |
| --- | --- | --- |
| **High** | Recurring programmes and week templates | Generate repeated sessions or copy a week, with a preview to prevent duplicates. |
| **High** | Conflict and coverage checks | Warn about overlapping assignments, unavailable personnel, and uncovered slots. |
| **High** | Export and print | Produce readable weekly schedules and monthly/quarterly workload reports in CSV or PDF. |
| **High** | Period approval and locking | Finalise monthly records; authorised reopening requires a reason recorded in history. |
| **High** | Monetary salary calculation | Apply VOV's confirmed salary rules and show the calculation breakdown. Requires agreed examples and expected results first. |
| **High** | Simultaneous-edit protection | Detect when another manager has changed an entry and prevent silent overwriting. |
| **Medium** | Multiple personnel per session | Support different responsibilities and explicit credit allocation without unintentionally awarding full points to everyone. |
| **Medium** | Leave, availability, and substitutions | Record availability and manage replacement staff while preserving assignment history. |
| **Medium** | Workload overview | Compare monthly progress across staff to help managers distribute upcoming work. |
| **Medium** | Staff self-service | Staff view their own records and request corrections, subject to manager approval. |
| **Medium** | Import existing records | Preview and validate spreadsheet data before importing it, reporting duplicates and errors. |
| **Low** | Notifications | Notify relevant users of assignment changes or approaching workload shortfalls. |
| **Low** | Automatic scheduling suggestions | Suggest assignments using agreed availability and workload rules, with manager review before saving. |
| **Low** | Additional interface languages | Provide Vietnamese and another agreed language. |

Other department-leader responsibilities and payroll payment processing are outside the proposed scope.

## Rules to clarify with VOV

- What points or hours does each programme earn? Do category, duration, staff role, or special programmes affect the value? Is there an hours-to-points conversion?
- What is the monthly target, and can it vary by person or month? What happens below or above it, and are leave, rounding, or carried-over points relevant?
- Does assigned work count immediately, or only after completion is confirmed? Who confirms it?
- Can several people share a session, and how should credit be allocated?
- What are the week start, quarter boundaries, time zone, and category time boundaries? The proposed reporting default uses calendar quarters and assigns overnight sessions to their start date.
- Which records may viewers see, and who may correct or finalise past periods?

Request one representative weekly schedule, one quarterly tabulation, and worked monthly eligibility examples. Until confirmed, use clearly labelled demonstration rules and record assumptions in the project proposal.
