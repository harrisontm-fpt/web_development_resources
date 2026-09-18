# Personal Work Activity and Hours Log — Design Brief

## Purpose and user

The interface should help the lecturer answer three questions: **what work have I recorded, what needs correcting, and how many hours belong in this month's report?** Routine entry should be quick enough to use throughout the month, and reports should make it easy to see which activities contribute to each total.

The lecturer is the client and primary user. This is a personal tool and a backup project option for the course. Use this document alongside the [project brief](personal_work_log_project.md). Students should create their own wireframes, mock-ups, and layouts rather than treating this brief as a finished interface specification.

## Branding and visual style

- Use a restrained, practical style with readable typography, neutral backgrounds, and a clear primary action for adding work.
- Give work dates, activity descriptions, hours, and report totals a clear visual hierarchy.
- Display the supplied category names in full where users choose or review them. Allow long names to wrap without obscuring controls or values.
- Use consistent category labels and optional colour cues; colour must not be the only way to identify a category.
- Clearly distinguish an editable activity from a calculated report total.
- Confirm the preferred application name and interface terminology with the client. Institutional branding and decorative imagery are not prerequisites for this personal tool.

## Main screens and content

### Activity entry

Make the work date, activity description, hours, and category information easy to enter and review. Make backdating discoverable and distinguish the date the work took place from the date the record was saved.

Label hour units and provide an example using the precision agreed with the client. Category controls must reflect the confirmed rules for main-category-only and subcategory use. Students must investigate these rules before deciding whether the interface needs an optional field, a mode selector, or only different report views.

Provide clear save feedback and preserve entered content when validation or a save request fails. Keep validation messages next to the relevant inputs. A live timer is an optional extension, so the manual-entry journey must work on its own.

### Activity log and corrections

Make dates, descriptions, hours, and categories easy to scan and provide a clear route to previous records. Students may explore a dated list, table, or another arrangement that fits the client's typical volume of work.

Make edit and delete actions discoverable on desktop and mobile. Editing should show the existing values clearly. Before deletion, identify the activity and explain that removing it changes the relevant report totals; provide a clear way to cancel.

Distinguish loading, no recorded activities, no matches for the selected dates, and a failed request. When there are no activities, provide a useful route to adding the first record.

### Reporting panel

Make period selection and report generation easy to find. Show the actual date range prominently, with the boundary convention confirmed during requirements gathering. A month name alone is insufficient because this reporting cycle spans two calendar months.

Present main-category totals and the overall total with clear hour units. Include the contributing activities and the subcategory detail agreed with the client. Make it clear that detailed breakdowns explain the main totals rather than adding extra hours.

Reports should be readable on-screen without requiring a download. Display an understandable empty report with zero totals. After changes to activities, ensure that the user can obtain an updated report and is not led to rely on stale totals.

Students should test whether the client can locate a specific activity, understand its classification, and reconcile it with the summary. Charts are optional; readable activities and totals are the priority.

## Accessibility and device experience

- Provide keyboard access, visible focus, meaningful headings, labelled inputs, sufficient contrast, and clear error messages.
- Use unambiguous dates and consistent hour formatting. Display any time-zone convention that affects the user's interpretation of dates.
- Make date and category controls usable with a keyboard and touch. Do not make core actions depend on hover or drag-and-drop.
- Support zoom and long activity descriptions and category names without clipping essential content.
- Keep adding, backdating, editing, deleting, and generating reports available on desktop and mobile.
- Desktop may show a wider activity table and report summaries together. Mobile may stack records and totals. If a report requires horizontal scrolling, make the scrolling area clear and keep the surrounding page usable.
- Clearly identify the signed-in experience and provide an easy way to log out. Keep demonstration data visibly labelled during assessment.

## Reference material and feedback

Ask the client how they currently record work and prepare the monthly report. Request a few anonymised activity examples and, if available, an example of the current report. These should inform terminology and grouping without making reproduction of an external template compulsory.

Students should present mobile and desktop wireframes for recording work, backdating an activity, correcting or deleting a previous entry, and generating a report. Follow with mock-ups and a working prototype. Record the client's feedback and the changes made in response.

Use fictional activities covering all four main categories and the supplied subcategories. Include a long description, fractional hours, an empty period, a backdated entry, a correction that changes the reporting period, and activities around the 15th. Once the category rules are agreed, include examples demonstrating both main-category-only and detailed use where applicable.

Client input still needed: the reporting boundary rule, category/subcategory behaviour, preferred hour precision, report grouping and terminology, representative activities, and extension priorities. Track these alongside the unresolved requirements in the project brief; students must confirm them rather than infer them from the suggested screen descriptions.
