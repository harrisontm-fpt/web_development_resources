# Lab and Equipment Booking — Design Brief

## Purpose and users

The website should help applicants answer: **what can I use, when is it available, and has my request been approved?** Staff should be able to understand a proposed project, check its resource needs, and make a clear decision.

Students and public applicants may have different levels of familiarity with the labs. Explain equipment capabilities and usage requirements in plain language. Lecturers and administrative staff need an efficient view of requests, confirmed bookings, and unavailable resources.

Use this document alongside the [project brief](lab_equipment_booking_project.md). It provides design direction; students create their own wireframes, mock-ups, and page layouts.

## Branding and visual style

- Use the relevant university or department name, approved logo, and brand guidance when supplied. Exact branding, colours, and fonts remain to be confirmed by the internal client.
- Use a practical, welcoming style with readable typography, neutral backgrounds, and a restrained accent colour for primary actions.
- Give lab names, dates, times, equipment requirements, and booking status a clear visual hierarchy.
- Use consistent text labels and colours for pending, approved, rejected, and cancelled requests. Availability and request status must be understandable without colour alone.
- Clearly distinguish the public catalogue, the applicant's own requests, and staff management. Identify the signed-in role and provide predictable navigation.
- Use relevant lab or equipment images where helpful, while keeping booking information and actions easy to find.

## Main screens and content

### Catalogue and availability

The home page should explain who can apply, what the service offers, and the steps from finding a slot to receiving approval. Provide clear routes to browse labs and equipment, view existing requests, and contact the department.

Lab and equipment pages should explain the facilities, location, capacity, capabilities, and any training or supervision requirements. Equipment names should be supported by short descriptions so applicants can judge suitability without already knowing model numbers.

Make the selected date, scheduling time zone, lab, and available slots easy to scan. Explain why a resource cannot be requested, such as a booked slot or maintenance, without revealing another applicant's project or identity. Provide a useful next step when no slots are available.

Students may explore a calendar, date-based list, or another suitable layout. An available slot must be described as open for requests, with staff approval still required.

### Booking request and personal requests

Guide the applicant through selecting a lab and slot, choosing equipment, describing the project, and reviewing the request. Keep the selected resources and timing visible or easy to revisit. A lab-only request must also be possible.

Use clear labels and short prompts for project purpose, intended outcome, participant numbers, experience, and support needs. Keep applicant type separate from student or industrial project type. Explain required information and preserve entered content when validation fails.

Use an action such as **Submit request** and a confirmation such as **Request submitted — awaiting staff approval**. Reserve language such as **Booking confirmed** for approved requests. If availability changes before submission, explain the conflict and help the applicant choose another slot without re-entering their project description.

The personal requests page should show date, lab, project title, status, and the staff explanation. Make pending edits and cancellation easy to find, with confirmation before cancellation. Explain that changing an approved booking requires a new request in the minimum version.

### Staff review and resource management

The staff view should make pending requests easy to find and filter. Present the project description, applicant information, lab, equipment, timing, participant numbers, and support needs together so staff can make an informed decision.

Clearly label approve, reject, and cancel actions. Require a reason where specified in the project brief and make clear that the applicant will see it. Show a useful message if a request has changed or resources are no longer available when approval is attempted.

Lab, equipment, and slot forms should use consistent controls. Make active resources, blocked slots, and unavailable equipment distinguishable. Before a resource change affects confirmed bookings, show the bookings staff must resolve. Preserve access to past request information.

## Accessibility and device experience

- Provide readable text, sufficient contrast, meaningful headings, keyboard access, visible focus, and labelled forms with clear validation messages.
- Show availability and request status using text as well as colour. Give informative images alternative text.
- Date and time selection must work with a keyboard. Do not make core tasks depend on drag-and-drop, hover, or a visual calendar alone.
- Display the scheduling time zone and use unambiguous, consistent dates and times throughout selection, review, and confirmation.
- Support zoom, touch-friendly controls, and mobile layouts without horizontal page scrolling. Desktop may show more dates or request details together; mobile may use a list of slots and stacked sections.
- Keep all core applicant and staff tasks available on desktop and mobile. Make loading, empty, success, permission, and conflict states clear.

## Reference material and feedback

Use the department's current booking forms, lab information, equipment lists, and approval process as the main design references when supplied. Familiar calendar and reservation patterns can inform the interface without dictating its layout.

Students should present mobile and desktop wireframes for finding resources and submitting a request, checking a decision, reviewing and approving a request, and making equipment unavailable. Follow with mock-ups and a working interface, recording feedback and resulting changes.

Seek feedback from a student applicant, a potential public or industry applicant, and a lecturer or administrator where practical. Check whether applicants understand that submission requires approval and whether staff can identify the proposed work and all requested resources before deciding.

Use fictional applicants and labelled sample resources during design and assessment. Include a student project, an industrial project, a lab-only request, a request with several equipment items, a rejected request, a cancellation, a conflict between pending requests, and equipment under maintenance.

Client input still needed: approved branding and introductory copy, the initial lab and equipment catalogue, usage and supervision requirements, representative booking examples, the contact route, and confirmation of the booking defaults and extension priorities.
