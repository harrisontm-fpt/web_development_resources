# Media Student Showcase Project

## Project objective

Build a public website that showcases media students and their work. Lecturers must be able to manage what is published without editing code. Industry visitors should be able to discover talent, understand each student's contribution, and find a contact route for employment, internships, freelance work, or collaboration. The extended version should give particular attention to outstanding students and projects.

The main users are industry visitors, students whose work is displayed, and lecturers or administrators who maintain the showcase.

This brief uses the supplied minimum requirements. The entry fields and extension priorities below are proposed defaults for the project. Visual direction is provided in the separate [design brief](design_brief.md).

## Must have: minimum requirements — Grades 1–2

### Public website

- A home page explaining the showcase, the participating university or department, and how to explore the work.
- A gallery or catalogue showing published projects, with a preview image, title, student name(s), and category for each entry.
- An individual project page with the full project information listed below.
- Browsing by at least one category, such as subject, media type, course, or semester.
- A clear industry enquiry route, such as an approved department contact link. A contact form or employer account is not required.
- Responsive pages that work on desktop and mobile, with accessible navigation, text, images, and forms.

### What each published showcase entry must contain

| Information | Required content |
| --- | --- |
| Project identity | Title and short summary |
| Student credit | Student name(s), with each person's role or contribution for group work |
| Context | Course or programme, year or semester, and at least one browsing category |
| Description | What was created, its purpose, and the skills or techniques demonstrated |
| Work sample | At least one representative image with alternative text; a working link to the full work where the image alone cannot present it, such as a film or interactive project |
| Enquiry route | An approved student/portfolio contact link or the shared department contact route |

Entries must also store a publication status. Draft and unpublished content must be visible only to authorised staff, including when requested through the API. Images and other media may use existing hosted URLs in the minimum version; direct uploads and embedded video are extensions.

### Lecturer administration

- Lecturer or administrator login and logout. One staff role is sufficient.
- An administration interface for adding, viewing, editing, publishing, unpublishing, and deleting entries.
- New entries start unpublished. Publishing makes an entry publicly available; unpublishing removes public access while retaining it for staff to edit.
- Validation prevents publication when required information is missing. Deletion requires confirmation.
- The backend checks authorisation for all management operations; hiding buttons alone is insufficient.

### Data and delivery

- Store showcase information persistently in an SQL database.
- Retrieve public content as JSON through the team's own REST API, and save administration changes through the backend.
- Follow all shared [final assignment requirements](../../../syllabus/final_assignment.md), including the JavaScript/React frontend choices, Node.js/Express backend, design evidence, user feedback, public deployment, documentation, and at least five integration tests and five E2E tests.

## Grade expectations

| Grade | Expected outcome |
| --- | --- |
| **1** | All minimum requirements and shared assignment obligations are met at a satisfactory level. Visitors can find and understand published work, and staff can manage it. |
| **2** | The same minimum scope is delivered more consistently, with clearer presentation, smoother interactions, better error handling, and improvements supported by testing and feedback. There is no separate compulsory feature list for Grade 2. |
| **Greater than 2 (3–5)** | All minimum requirements are met, with increasing quality, robustness, completeness, and demonstrated understanding. Select useful extensions below to develop the project further. |

Extensions do not automatically earn a particular grade. Teams do not need to implement every extension to achieve Grade 5; the course's overall assessment criteria apply.

## Nice to have: prioritised extensions — Grades 3–5

These are suggested priorities based on the showcase's purpose. Choose a manageable set after the minimum version works.

| Priority | Feature | Expected benefit or behaviour |
| --- | --- | --- |
| **High** | Lecturer-selected highlights | Staff feature outstanding projects or students, with a short explanation of why they were selected. |
| **High** | Student profiles | A shareable profile brings together a student's projects, skills, contribution credits, portfolio, and approved contact links. |
| **High** | Advanced discovery | Search by title, student, or skill; combine filters and sort results so industry visitors can find relevant talent. |
| **High** | Richer project media | Multiple images/files and embedded video, including YouTube, help visitors assess the work. Direct uploads may be added with file-type and size validation. |
| **High** | Structured industry enquiries | Visitors can submit an opportunity linked to a student or project, routed to an agreed recipient with a clear submission confirmation. |
| **Medium** | Student submissions and approval | Students manage their own drafts and submit them for lecturer review; only approved work becomes public. Requires student accounts. |
| **Medium** | Separate staff roles | Lecturers curate content; administrators additionally manage accounts and shared settings. |
| **Medium** | Publication scheduling and archiving | Staff schedule release dates and archive older work with clear public visibility rules. |
| **Medium** | Multilingual content | Visitors can switch between agreed languages, with a clear fallback for missing translations. |
| **Medium** | Exhibition or event pages | Curated collections present work for a particular show, course, or event. |
| **Medium** | Sharing and related projects | Share links and relevant suggestions help visitors explore and circulate student work. |
| **Low** | Bookmarks, favourites, or likes | Visitors save or acknowledge work; these remain separate from lecturer-selected recognition. |
| **Low** | Moderated feedback | Comments support constructive feedback with staff moderation. |
| **Low** | Analytics and visualisations | Staff view project engagement or distributions by course, year, or media type. |
| **Low** | Additional accessibility preferences | Optional text-size, contrast, or motion controls supplement the accessible default interface. |

Employer accounts, recruitment management, and automatic ranking of students are outside the proposed scope.
