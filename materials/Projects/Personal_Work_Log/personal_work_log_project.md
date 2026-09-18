# Personal Work Activity and Hours Log Project

## Project objective

Build a private web application that helps the lecturer record their own work activities and hours throughout the month, then generate a report. The current problem is keeping an accurate ongoing record instead of reconstructing work when the monthly report is due. The lecturer is the client and primary user.

This is a backup project if one of the other client projects cannot proceed. It replaces an available project brief rather than adding another team to the course.

The client describes the reporting cycle as **the 15th of the previous month to the 15th of the current month**. Students must clarify which period includes work on the boundary date before implementing the calculation. Do not silently assume calendar months or count the same activity in two consecutive reports.

This brief establishes the minimum scope while leaving specific business rules for students to gather from the client. Visual direction is provided in the separate [design brief](design_brief.md).

## Must have: minimum requirements — Grades 1–2

### Private access

- Login and logout for the owner. Activity records and reports are private.
- Enforce authentication and access checks in the backend as well as the interface, including direct API requests.
- One owner role is sufficient. Public registration, multiple staff accounts, and approval workflows are not required.

### Ongoing activity log

- Add activities and manually enter the hours worked as part of an ongoing log. A live start/stop timer is not required.
- View saved activities and find previous records by date or reporting period.
- Backdate an activity to the date the work took place. Use the work date, not the creation date, when assigning it to a report.
- Edit previous activities, including their work date, description, hours, and category information.
- Delete an activity after an explicit confirmation that identifies the affected record.
- Preserve entered information when validation fails and clearly confirm successful saves or deletions.

### What each activity must record

| Information | Required content |
| --- | --- |
| Identity | Unique activity ID |
| Work date | Date the activity took place, including dates before the day of entry |
| Activity | A meaningful description of the work performed |
| Hours | Positive hours worked, supporting fractional hours; precision and rounding to be agreed with the client |
| Classification | One of the four main categories, with subcategory information according to the rules students confirm with the client |

Validate required information, valid dates, hours, and category/subcategory combinations on the server. Store records persistently so they remain available after logout or a reload. The interface must distinguish the date of the work from any creation or modification timestamps it displays.

### Supplied work categories

Retain all of the following categories and activities during requirements gathering. The supplied list has **two, three, two, and two subcategories**, respectively; do not reduce the second category to two items. Wording may be refined with the client without merging or dropping criteria.

#### Good Teaching Quality

- Delivery SUT Unit Learning Outcomes, Grading Timely
- Participate in Meeting Faculty

#### Good Connecting Theory to Industry Relevant Practices

- Organize practical skill competition
- Organize Mentor Coaching, Talks, Study tour or Industry Project
- Develop network and internship

#### Good Supporting and Inspiring students

- Do the 1-1 Tutoring
- Do the Meeting or orientation or communication to current or future students

#### Good Academic and Industry research

- Do something relating publishing academic paper
- Do something relating Presentation in Industry Workshop or Commercial research

The client sometimes uses subcategories and sometimes only the four main categories. **Students must clarify when each applies.** In particular, establish whether subcategories are optional on individual activities, whether there are different logging modes, or whether the distinction concerns report detail. Do not turn one of these interpretations into a confirmed requirement without client feedback.

### Reporting panel

- Select a monthly reporting period and generate an on-screen report.
- Clearly show the actual start and end dates and the agreed boundary convention.
- List the contributing activities with their work dates, descriptions, hours, and relevant category information.
- Show totals for the four main categories and an overall hours total. Confirm the required subcategory breakdown with the client.
- Count each activity once in the overall total; a subcategory breakdown must not add the same hours again.
- Reflect additions, backdated entries, edits, and deletions when the report is generated again. A date or category correction must move the hours to the appropriate period or category.
- Show a clear empty state and zero totals when the selected period has no activities.

The minimum report is on-screen only. Downloading, printing, and matching an external report template are optional extensions unless subsequently agreed through a scope review.

### Data and delivery

- Store activities and their category information in an SQL database and use the team's own REST API to retrieve reports and perform authorised changes.
- Support desktop and mobile use, accessible forms, readable reports, and useful error messages.
- Follow the shared [final assignment requirements](../../../syllabus/final_assignment.md), including the JavaScript/React frontend choices, Node.js/Express backend, design work, user feedback, documentation, and at least five integration tests and five E2E tests.
- Provide an internet-accessible assessment deployment with an authenticated demonstration account and fictional activities. Keep the client's personal work records separate from assessment data.

## Grade expectations

| Grade | Expected outcome |
| --- | --- |
| **1** | All minimum requirements and shared assignment obligations work at a satisfactory level. The owner can maintain an activity log and generate an accurate report using the agreed rules. |
| **2** | The same scope is delivered more consistently, with clearer entry and reporting, reliable totals, better error handling, and improvements supported by feedback. There is no separate compulsory feature list for Grade 2. |
| **Greater than 2 (3–5)** | All minimum requirements are met, with increasing quality, robustness, completeness, and demonstrated understanding. Select useful extensions to develop the system further. |

Extensions do not automatically earn a grade. Teams do not need every extension to achieve Grade 5; the course's overall assessment criteria apply.

## Nice to have: prioritised extensions — Grades 3–5

These priorities are suggestions for discussion with the client. Choose a manageable set after the minimum version works.

| Priority | Feature | Expected benefit or behaviour |
| --- | --- | --- |
| **High** | Export and print | Download or print the report in an agreed format, such as CSV or PDF; confirm any required external template first. |
| **High** | Duplicate and recurring activities | Reuse common descriptions and classifications, with a review step to prevent accidentally logging work that did not happen. |
| **High** | Correction history and recovery | Inspect previous values and recover accidentally deleted entries. |
| **Medium** | Search and combined filters | Find work by description, category, and date range. |
| **Medium** | Start/stop timer | Capture elapsed time and review the resulting activity before adding it to the log. |
| **Medium** | Logging reminders | Offer optional reminders to record work or prepare the monthly report. |
| **Medium** | Trends and comparisons | Compare hours across reporting periods and categories while retaining access to the activities behind the totals. |
| **Low** | Import existing records | Preview and validate an agreed spreadsheet format, identifying duplicates and invalid classifications before saving. |

Payroll calculations, staff scheduling, multiple-user management, and supervisor approval are outside the proposed scope.

## Requirements for students to clarify with the client

- **Reporting boundaries:** Which report owns work on the 15th? Agree an example covering two consecutive periods, including a year transition, and the date/time-zone convention used for “today.”
- **Category rules:** When are subcategories used? Does main-category-only use affect logging, reporting, or both? Confirm the supplied wording and how a real activity maps to the criteria.
- **Hours:** How are fractional hours entered and displayed? Agree precision and rounding using a worked example.
- **Report presentation:** Which grouping, ordering, labels, and subcategory totals are useful? Request a representative example without making export a minimum requirement.
- **Daily workflow:** Gather a few typical and unusual activities, the devices used, and the main frustrations with the current process. Use these to review wireframes and prioritise extensions.

Document the answers and worked examples in the project proposal, and obtain client feedback before implementing the affected behaviour. Any temporary assumptions used in prototypes must be clearly labelled. Requirements gathering and design decisions are part of the students' work.

## Suggested acceptance scenarios

Use agreed examples to guide the required integration and E2E tests:

- Add an activity with fractional hours, reload, and confirm that it remains available with the correct value.
- Backdate an activity and verify that it appears in the report for its work date.
- Edit an activity's date or category and confirm that the old and new report totals are correct.
- Cancel a deletion, then confirm a deletion, and check the record and resulting totals in each case.
- Generate an empty report and a report containing several categories; reconcile the overall total with the contributing activities.
- Test the agreed rules immediately before, on, and after the 15th, including consecutive periods across December and January.
- Test main-category-only and subcategory cases according to the rules established with the client.
- Reject missing descriptions, invalid hours, and invalid category combinations with understandable feedback.
- Confirm that unauthenticated page and direct API requests cannot read or change private records or generate private reports.
