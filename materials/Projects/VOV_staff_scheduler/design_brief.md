# VOV Staff Scheduler — Design Brief

## Purpose and users

The interface should help users answer three questions: **who is responsible for each programme this week, how much work has each person completed, and where did those totals come from?**

Managers need efficient entry and correction tools. Viewers need clear schedules, workload reports, and verification history. Use this document alongside the [project brief](vov_staff_scheduler_project.md). Students should create their own wireframes, mock-ups, and layouts.

## Branding and visual style

- Use the approved VOV or department name, logo, and brand guidance when supplied. Exact assets, colours, and fonts remain to be confirmed.
- Use a restrained, practical style with readable typography, neutral backgrounds, and a clear hierarchy between dates, programme names, staff names, and totals.
- Use consistent colours and text labels for the five programme categories. Make scheduled, completed, and cancelled states distinguishable without relying on colour alone.
- Clearly identify the selected week, staff member, reporting period, and signed-in role.
- Prioritise legible numbers and efficient routine tasks. Promotional imagery and decorative animation are unnecessary for this internal tool.

## Main screens and content

### Weekly schedule

Make the selected week, days, programme categories, times, and responsible personnel easy to scan. Provide a clear way to move between weeks and return to the current week.

Managers must be able to find the add, edit, reassign, complete, and cancel actions. Viewers should see a clear read-only experience. The session form should distinguish a usual programme from a one-off or replacement programme and explain when a description is required.

Show the workload that will be credited before saving. Use clear save confirmations and preserve entered data when validation fails. Students may explore a timetable, grouped list, or another layout that works with the client's real schedule density.

### Workload and eligibility report

Show the selected person and quarter, monthly summaries, and the underlying session list. Keep hours, points, targets, and shortfalls clearly labelled with their units. Separate planned workload from completed, credited work.

Use plain status text such as **target met**, **below target**, and **target not configured**. A quarterly total must not conceal a shortfall in an individual month. Missing configuration should be visibly different from a valid zero total.

Make it easy to move from a total to the sessions that explain it. Describe the points status as an eligibility check; only display a monetary salary if the client has supplied the calculation rules and that extension is implemented.

### History and supporting forms

History should show the date and time, editor, affected record, action, and old/new values in readable language. Show correction reasons beside the relevant changes and keep cancelled work available for inspection.

Staff, programme, and monthly-target forms should use consistent labels and controls. Clearly distinguish inactive records from deleted data and explain whether a change affects an existing session or a future default.

## Accessibility and device experience

- Provide keyboard access, visible focus, labelled inputs, clear validation, and sufficient contrast.
- Use meaningful table headings and readable date and number formats. Display the scheduling time zone; use consistent formats across the interface.
- Support Vietnamese names and programme titles with appropriate character rendering. Confirm the primary interface language with VOV.
- Support zoom and touch-friendly controls. Do not make core actions depend on hover or drag-and-drop.
- Desktop can show more of the week or report at once. Mobile may use a day-by-day agenda and stacked summaries, with access to the same underlying records and core actions.
- Where a wide report needs horizontal scrolling, keep the surrounding page usable and make the scrolling area clear. Avoid squeezing a full weekly timetable into unreadable mobile columns.

Advanced interactions, such as drag-and-drop scheduling, are optional and must retain an accessible form-based alternative.

## Reference material and feedback

The most useful design references will be VOV's existing weekly schedule and quarterly tabulation. Request anonymised examples and identify the columns, terminology, and checks staff already rely on. Familiar calendar and spreadsheet patterns can inform navigation and report readability without dictating the final layout.

Students should present mobile and desktop wireframes for assigning a session, reviewing one person's quarter, and investigating a correction. Review these with a manager and, where possible, a viewer. Follow with mock-ups and a working prototype, recording feedback and resulting changes.

Use fictional people and clearly labelled sample targets during design and assessment. Include examples of an overnight programme, a replacement programme, a cancelled session, a month below target, a missing target, and a corrected credit value.

Client input still needed: approved branding, interface language, representative schedules and reports, programme/category definitions, calculation examples, and viewer access boundaries. Track these alongside the unresolved business rules in the project brief.
