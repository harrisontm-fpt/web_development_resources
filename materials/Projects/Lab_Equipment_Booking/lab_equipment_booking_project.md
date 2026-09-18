# Lab and Equipment Booking Project

## Project objective

Build a website for a university or department to manage access to its laboratories and equipment. Students and members of the public, including industry users, should be able to find available time slots, describe a student or industrial project, and request the lab and equipment they need. Lecturers and administrative staff review requests, approve bookings, and maintain the resources available for use.

This is an internal university project with a public-facing service. The main users are student and public applicants, lecturers who assess proposed use, and administrative staff who manage bookings and resources.

This brief develops the proposed idea into a minimum scope. Booking and access rules below are proposed defaults for confirmation with the department. Visual direction is provided in the separate [design brief](design_brief.md).

## Must have: minimum requirements — Grades 1–2

### Public website and availability

- A home page explaining the service, who can apply, how approval works, and how to contact the department.
- A catalogue of active labs and equipment, with browsing by lab or equipment category.
- A lab page showing its location, description, capacity, usage requirements, associated equipment, and available booking times.
- Equipment information showing each item's name, description, associated lab, and any training or supervision requirements.
- A date-based availability view showing which lab slots and equipment items can be requested. Public visitors can browse without signing in.
- Show availability without exposing other applicants' names, contact information, or project descriptions.
- Responsive pages with accessible navigation, readable information, and usable forms on desktop and mobile.

### Applicant accounts and requests

- Registration, login, and logout for student and public applicants. Both groups can submit requests; an account is required to apply and track the outcome.
- Applicants select an available lab slot, describe their project, and optionally select one or more available equipment items associated with that lab.
- A review step summarises the project, time, lab, and requested equipment before submission. Clearly explain that submitting a request does not confirm a booking.
- A personal requests page shows the applicant's own requests, their details, current status, and staff decisions.
- Applicants can edit a pending request and cancel their own pending or approved future booking. Changes to an approved booking require cancellation and a new request in the minimum version.
- Required fields and booking rules are validated on the server. Applicants cannot view or modify other applicants' requests or grant themselves staff permissions.

### What each request must record

| Information | Required content |
| --- | --- |
| Identity | Unique request ID, applicant account, and submission time |
| Applicant | Name, contact email, student or public applicant type, and course/programme or organisation where applicable |
| Project | Project title, student or industrial project type, description of the intended work, and intended outcome |
| Resources | One lab and the individually identified equipment items requested, if any |
| Timing | Date, start and end time, and the department's scheduling time zone |
| Use requirements | Number of participants, relevant experience or training, and any requested supervision or support |
| State | Pending, approved, rejected, or cancelled |
| Decision | Reviewing staff member, decision time, and applicant-visible explanation; a reason is required for rejection or staff cancellation |

Applicant type and project type are separate: a student may be working on an industrial project. Project descriptions and contact information are visible only to the applicant and authorised staff, including through the API.

### Lecturer and administrative staff management

- Staff login and logout. One shared staff role for lecturers and administrative staff is sufficient for the minimum version; public registration cannot create staff accounts.
- A request list that can be filtered by date, lab, and status, with access to the full project description and requested resources.
- Staff can approve or reject pending requests and cancel approved future bookings with a recorded reason. Approval covers the complete request, including all selected equipment.
- Recheck the current request and resource availability when approving. If a request has changed since it was opened, require staff to review the updated details before deciding.
- Applicants see the decision and explanation in their account. Email notifications are an extension.
- Staff can add, view, edit, and deactivate lab and equipment records, and manage the lab slots offered for booking.
- Equipment records include a unique item identifier, name, description, category, associated lab, usage requirements, and available or unavailable status. Track physical items separately in the minimum version, including identical items.
- Staff can block lab slots and mark equipment unavailable for maintenance or other reasons. If a change affects approved future bookings, show the affected bookings and require staff to resolve or cancel them before applying the change.
- Preserve past requests and their resource references when resources are deactivated. Record who made booking decisions and resource changes, and when.
- Enforce staff permissions in the backend as well as the interface.

### Booking rules and conflict prevention

The proposed minimum uses staff-created, non-overlapping slots for each lab. A booking reserves the whole lab and selected equipment for the full slot. Equipment remains associated with one lab; equipment-only loans and shared lab capacity are extensions.

- Requests must use a future, offered slot, an active lab, and available equipment associated with that lab. Participant numbers must not exceed lab capacity.
- Pending requests do not reserve resources. Several applicants may request the same slot; explain that availability is subject to approval.
- An approved booking reserves the lab and every selected equipment item. The backend must prevent overlapping approved bookings for any of those resources, including when two staff members approve at the same time.
- Approval must either reserve all requested resources or fail without confirming any part of the booking. Show a useful conflict message and keep the unsuccessful request pending for staff review or rejection.
- Rejecting or cancelling a request does not reserve resources. Cancelling an approved future booking releases its resources for other requests, provided the slot and equipment remain available for use.
- Pending requests that conflict with a newly approved booking remain visible to staff and must not be approved unless the conflict is resolved. Past slots cannot be approved.

### Data and delivery

- Store accounts, roles, labs, equipment, slots, requests, selected equipment, and decision records persistently in an SQL database.
- Use the team's own REST API to retrieve public information as JSON and perform authenticated applicant and staff operations.
- Follow all shared [final assignment requirements](../../../syllabus/final_assignment.md), including the JavaScript/React frontend choices, Node.js/Express backend, design evidence, user feedback, public deployment, documentation, and at least five integration tests and five E2E tests.
- Include evidence that permissions, request submission, approval, cancellation, and conflicting approvals behave correctly. These checks can form part of the shared test requirements.
- Provide fictional applicants and projects, sample resources, and demonstration accounts for assessment. Identify sample availability clearly.

## Grade expectations

| Grade | Expected outcome |
| --- | --- |
| **1** | All minimum requirements and shared assignment obligations are met at a satisfactory level. Applicants can request resources and track decisions; staff can manage availability and approve bookings without resource conflicts. |
| **2** | The same minimum scope is delivered more consistently, with clearer availability and request forms, smoother staff review, better error handling, and improvements supported by testing and feedback. There is no separate compulsory feature list for Grade 2. |
| **Greater than 2 (3–5)** | All minimum requirements are met, with increasing quality, robustness, completeness, and demonstrated understanding. Select useful extensions below to develop the project further. |

Extensions do not automatically earn a particular grade. Teams do not need to implement every extension to achieve Grade 5; the course's overall assessment criteria apply.

## Nice to have: prioritised extensions — Grades 3–5

These priorities are proposed for department review. Choose a manageable set after the minimum version works.

| Priority | Feature | Expected benefit or behaviour |
| --- | --- | --- |
| **High** | Notifications and reminders | Notify applicants of decisions, cancellations, and upcoming bookings, and staff of new requests. |
| **High** | Separate staff roles | Lecturers review project suitability; administrators additionally manage resources, staff access, and booking settings. Define who can make the final approval. |
| **High** | Revision and rescheduling workflow | Staff request changes or suggest another slot; applicants revise and resubmit without losing the earlier discussion or decision history. |
| **High** | Training and supervision checks | Record verified training or assign a supervisor, and require the relevant conditions before approval. |
| **High** | Equipment check-out and return | Staff record collection, return, condition, and missing or damaged items against an approved booking. |
| **Medium** | Equipment-only reservations | Allow equipment loans without reserving a whole lab, with explicit collection, return, and conflict rules. |
| **Medium** | Recurring availability and closures | Generate slots from weekly opening hours and apply holidays or maintenance periods with a preview of affected bookings. |
| **Medium** | Search and combined filters | Find suitable labs and equipment by category, capability, date, capacity, or usage requirements. |
| **Medium** | Calendar export | Add approved bookings to a personal calendar with the correct time zone and booking details. |
| **Medium** | Request attachments | Add project plans or supporting documents with file-type, size, and access controls. |
| **Medium** | Utilisation reports | Show resource use, cancellations, and demand by period to support department planning. |
| **Low** | Waitlist | Allow applicants to express interest in a full slot and receive an invitation to request it if it becomes available. |
| **Low** | Shared lab capacity | Support concurrent bookings for workstations or places with capacity and equipment allocation checks. |
| **Low** | Additional interface languages | Provide the service in the department's agreed languages. |

Payments, invoicing, physical door access, and integration with university identity or inventory systems are outside the proposed scope. The minimum version records usage requirements for staff review; automated training verification is an extension.

## Rules to clarify with the department

- Which labs and equipment are included, and which can public applicants use? What descriptions, capacity limits, and usage requirements should be published?
- Who will act as the internal client, review requests, and maintain resources? Is the shared staff role suitable for the first version?
- What are the opening hours, slot durations, scheduling time zone, booking notice, maximum duration, and cancellation rules?
- What training, supervision, or other conditions must staff check for student and industrial projects before approval?
- Is exclusive use of one lab per booking suitable, and may equipment only be used in its associated lab?
- What applicant details are needed, how should student status be established if required, and how long should request records be retained?

Request an initial lab and equipment list, representative student and industrial booking examples, and feedback from a lecturer or lab administrator. Until rules are confirmed, use clearly labelled demonstration settings and record assumptions in the team's project proposal.
