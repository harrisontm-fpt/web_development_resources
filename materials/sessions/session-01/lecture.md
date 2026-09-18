
# Session 01 — Starting a Team Project

[Session index](../README.md) · [Student workshop](workshop.md) · [Project Management Guide](../../project_management.md)

**Week 1 · Lecture: 60 mins · Workshop: 60 mins · Supervised Project Lab: 60 mins**

---

## 1. Learning Goals

By the end of this 3-hour block, students will be able to:
1. **Differentiate** between a client's underlying problem, an output, and a measurable user outcome.
2. **Contrast** Agile (iterative) and Waterfall (predictive) approaches, identifying why early feedback and vertical slices de-risk software projects.
3. **Formulate** weekly deliverable goals using the **SMART** criteria.
4. **Map out** a lightweight weekly Scrum/Kanban cycle (backlog planning, standups, review, retrospective).
5. **Establish** a baseline Team Working Agreement covering communication, role rotation, and code review standards.

---

## 2. Session Timetable

| Time | Phase | Focus | Key Activities & Cues |
| :--- | :--- | :--- | :--- |
| **00–10m** | Lecture | **Introductions & Icebreaker** | Quick poll: Best and worst group work experiences; root causes of failure. |
| **10–25m** | Lecture | **Problem Framing & Methodologies** | Problem vs. feature trap; Outputs vs. Outcomes; Waterfall vs. Agile comparison. |
| **25–40m** | Lecture | **Iterative Cycles & Scrum Basics** | Sprints, backlog refinement, standups, reviews, and retrospectives. |
| **40–50m** | Lecture | **SMART Objectives & Visible Work** | Writing SMART goals for user stories; Kanban boards and Definition of Done (DoD). |
| **50–60m** | Lecture | **Worked Case Study & Concept Check** | Refactoring bad task cards into vertical slices; formative Q&A. |
| **60–120m**| Workshop | **Hands-on Team Formation** | Draft Team Charter, select communication channels, set up project board. |
| **120–180m**| Lab | **Sprint 0 / Initial Backlog** | Deconstruct project brief into initial user stories and establish Sprint 1 goals. |

---

## 3. Core Concepts

### 3.1 Start with a Problem, Not a Solution

Client briefs rarely arrive cleanly packaged as software requirements. They are usually an entangled mix of symptoms, assumptions, and prescriptive feature requests (e.g., *"We need a React Native mobile app with biometric login"*).

```
[ Problem / Need ] ──(Informs)──> [ Desired Outcome ] ──(Generates)──> [ Possible Outputs / Features ]
```

As engineers, you must resist writing code until you understand the root friction:
* **The Root Problem:** Why does this problem exist? Who suffers from it? What is the current manual or broken workaround?
* **Output vs. Outcome:**
  * **Output (What you built):** *"An activities catalogue page with 4 filters exists."* (Zero guarantee anyone cares or that it works).
  * **Outcome (The change in human behavior):** *"A student finds a club event matching their schedule and registers in under two minutes."*
* **Constraints:** Non-negotiable boundaries imposed by the course, platform, or client (e.g., PostgreSQL persistence, WCAG 2.1 AA accessibility, automated CI pipeline, zero external UI libraries).

---

### 3.2 Agile vs. Waterfall: Why We Work in Slices

![Waterfall vs. Agile Development Models](https://commons.wikimedia.org/wiki/Special:FilePath/Waterfall_vs_agile-1.png)

#### The Waterfall Model (Sequential / Predictive)
In a traditional Waterfall methodology, development moves strictly downward through sequential phases: **Requirements → Design → Implementation → Verification → Maintenance**.
* **Where it works:** Well-understood domains with fixed, stable requirements that will not change (e.g., safety-critical aerospace systems, building bridge foundations).
* **Where it fails university projects:** If analysis and design take 8 weeks, coding starts in Week 9, and integration happens in Week 14, **all the catastrophic risks occur at the end**. When the database schema conflicts with the UI, or the client says *"That is not what I meant"*, you have run out of semester.

#### The Agile Mindset (Iterative / Empirical)
Agile software development assumes requirements will evolve as users interact with the system. Instead of building horizontal layers (all databases first, all APIs second, all UI last), Agile delivers **thin, vertical end-to-end slices** of working software each week.

| Dimension | Waterfall (Predictive) | Agile (Empirical / Iterative) |
| :--- | :--- | :--- |
| **Requirement Volatility** | Assumed fixed upfront; changes carry change penalties. | Welcomed as feedback; reprioritized in backlog. |
| **Delivery Strategy** | Single "Big Bang" release at project conclusion. | Frequent, demonstrable increments of working software. |
| **Risk Profile** | High late-stage integration and relevance risk. | Early de-risking; fail fast, validate early. |
| **Team Structure** | Functional silos (analysts, designers, coders, testers). | Cross-functional collaboration; collective code ownership. |

---

### 3.3 The Lightweight Scrum Cycle

<div style="background-color: #ffffff; padding: 16px; border-radius: 6px; display: inline-block;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Scrum_process.svg" alt="Scrum Process" />
</div>

Scrum provides an empirical framework based on **transparency, inspection, and adaptation**. Rather than adopting cumbersome corporate ceremonies, this course uses a streamlined weekly feedback loop:

1. **Sprint Planning (First session of the week):**
   * Inspect the product backlog.
   * Pick **one clear outcome** for the week.
   * Break the outcome into tasks estimated in hours (not days).
2. **Standup Meetings (Mid-week check-in / 5 mins async or sync):**
   * *What did I complete?*
   * *What am I working on next?*
   * *What blockers are in my way?* (Coordinate immediately: *"My endpoint returns 404 on invalid IDs; let's agree on the error payload now."*)
3. **Sprint Review (Second session of the week):**
   * Demonstrate **working, running code** (not slide decks or wireframes).
   * Verify against acceptance criteria.
4. **Sprint Retrospective (Team-internal reflection):**
   * *What went well in our collaboration?*
   * *What slowed us down?*
   * *What concrete adjustment will we commit to next week?*

---

### 3.4 Setting SMART Project Objectives

When teams set vague goals like *"Do research"* or *"Work on frontend"*, work remains invisible, velocity stalls, and accountability dissolves. Every sprint goal and user story task must be **SMART**:

![SMART Goals Framework](https://upload.wikimedia.org/wikipedia/commons/2/28/SMART-goals.png)

* **S — Specific:** State precisely what is delivered and where.
* **M — Measurable:** Define binary, testable evidence that proves completion.
* **A — Achievable:** Scoped realistically to 3–6 hours of individual effort within the week.
* **R — Relevant:** Directly moves the needle on the core client problem/milestone.
* **T — Time-bound:** Tied to a concrete session deadline or milestone date.

#### Goal Refactoring Examples

* ❌ **Vague:** *"Set up the database."*
  * ✔️ **SMART:** *"By Wednesday 18:00, commit a reproducible PostgreSQL migration script and seed file with 15 sample club records, verified via a passing Docker compose script."*
* ❌ **Vague:** *"Make the activities look good."*
  * ✔️ **SMART:** *"By Friday's lecture, implement a responsive mobile card list for activities matching Figma frame 2.3, passing axe-core accessibility checks with zero critical violations."*

---

### 3.5 Making Work Visible: The Kanban Board & Definition of Done

![Kanban Board Workflow](https://upload.wikimedia.org/wikipedia/commons/d/d3/Simple-kanban-board-.jpg)

A board (GitHub Projects or Trello) prevents work from hiding. Every task card must satisfy the following anatomy:
* **Assigned Owner:** Exactly one person drives the card (collaborators may assist).
* **Acceptance Criteria (Given / When / Then):** Clear conditions required to close the card.
* **Evidence Link:** A link to a merged Pull Request, test suite report, or deployed URL.

#### Establishing a "Definition of Done" (DoD)
A task is never "Done" just because code is written on someone's laptop. A baseline team DoD includes:
1. Code conforms to project linting and formatting rules.
2. Changes are reviewed and approved via Pull Request by at least one peer.
3. Unit/integration tests pass locally and on GitHub Actions CI.
4. Feature is deployed to the staging environment and manually smoke-tested.

---

## 4. Worked Example: The Campus Activities Portal

To see this in action, consider our recurring practice case:

> *"Students on campus miss club workshops because event details are scattered across Instagram, Discord, and physical bulletin boards. Club organizers complain that updating multiple channels takes hours."*

### Step 1: Slice the Problem Vertically
Avoid the trap of building a complete authentication system, payment gateway, and messaging engine before proving value. 

* **Sprint 1 Vertical Slice:** A prospective attendee can navigate to `/events` on their phone, see events happening this week, and click to view event details and location without an account.
* **Sprint 2 Vertical Slice:** An organizer can authenticate via institutional email and publish an event to the public feed.

### Step 2: Formulate the Sprint Task Cards
Deconstruct the Sprint 1 goal into discrete technical tasks on the Kanban board:
* `[DB]` Write PostgreSQL schema for `events` table (Title, Description, Venue, StartTime, ContactEmail).
* `[API]` Implement `GET /api/events` returning active events sorted chronologically; include integration tests.
* `[UI]` Build mobile-responsive `EventCard` and `EventList` components consuming mock JSON.
* `[Deploy]` Set up staging deploy pipeline on Vercel/Render triggered by merges to `main`.

---

## 5. Team Dynamics & Working Agreements

Three-person teams fail most often from social breakdowns, not technical incompetence:
```
Common Dysfunctions:
├── The "Lone Hero"   ──> Writes the whole app over a weekend; teammates learn nothing and lose investment.
├── The "Ghost"       ──> Disappears mid-week, provides zero git commits, reappears 1 hour before deadlines.
└── The "Silo"        ──> "I only do CSS, you do backend." Project breaks when integration is required.
```
### The Solution: The Team Working Agreement
During today's workshop, every team completes a binding Team Charter addressing:
1. **Core Communication:** What is our primary channel (Slack/Discord)? What is the expected response window (e.g., within 24 hours on weekdays)?
2. **Meeting Cadence:** When is our weekly 15-minute standing sync outside of class?
3. **Pull Request Protocol:** Maximum PR size (< 300 lines); turnaround time for peer code reviews (< 24 hours).
4. **Escalation Trigger:** If a teammate goes silent for 48 hours without prior notice, the team must notify the course instructor immediately—not in Week 15.

---

## 6. Formative Checks & Class Discussion

During the final 10 minutes of the lecture, present these prompts to the cohort:

1. **Scenario 1:** A team member says on Thursday night, *"My backend code is done, but I haven't committed it yet because it isn't integrated."*
   * *Question:* Is it Done? What risk is concealed here?
   * *Takeaway:* Unintegrated code is inventory, not progress. Small, daily PRs prevent integration nightmares.
2. **Scenario 2:** A client asks for AI-driven schedule recommendations in Week 2 of the campus activities project.
   * *Question:* How do you respond using output vs. outcome logic?
   * *Takeaway:* Acknowledge the idea, document it in the product backlog icebox, and test whether users can actually find static events first.

---

## 7. Course Milestones & Assessment Architecture

```
Week 01        Week 05           Week 08           Week 14          Week 16   +48h
│               │                 │                 │                │        │
▼               ▼                 ▼                 ▼                ▼        ▼
Kickoff ───► Proposal Review ──► Mid Review 1 ──► Mid Review 2 ──► Presentation ──► Final Delivery
(Ungraded /       (Formative /      (Formative /     (Summative)     (Codebase &
Go-No-Go)          Peer Review)      Dry-Run)                        Artifacts)
```
* **Session 05 (Proposal Submission):** Mandatory Go/No-Go architecture & problem proposal review.
* **Session 08 & 14 (Formative Sprint Reviews):** Live product walkthroughs with instructor feedback against rubric.
* **Session 16 (Final Presentation):** Live demonstration of working software (graded 1–5; 0 indicates failure).
* **Final Codebase Delivery:** Git repository tag and staging deployment snapshot due exactly **48 hours after Session 16**.

---

## 8. Workshop & Lab Instructions (Next 120 Minutes)

### Workshop (60 mins) — Setup & Charter
1. Join your assigned 3-person teams.
2. Fork the course [Project Management Starter Kit](../../project_management.md).
3. Draft and sign your **Team Working Agreement**.
4. Create your team **GitHub Project / Trello board** with columns: `Backlog`, `Ready`, `In Progress`, `In Review`, `Done`.

### Lab (60 mins) — Backlog & Sprint 1 Setup
1. Read the assigned client brief.
2. Formulate 3 distinct **User Stories** using the template:
   > *As a [type of user], I want [an action/capability] so that [a benefit/outcome].*
3. Derive 2 **SMART tasks** for each team member for Sprint 1.
4. Have your instructor review and sign off on your board before departing.

---

## 9. Preparation Checklist & Reading

### Lecturer Checklist
- [ ] Ensure students have repository creation rights in the course GitHub Organization.
- [ ] Bring physical copies or digital templates of the Team Working Agreement.
- [ ] Have the live Campus Activities reference repository accessible on the projector.

### Required Student Reading
- [Agile Manifesto: 12 Principles](https://agilemanifesto.org/principles.html)
- [Team Agreement and Planning Workbook](../../project_management.md)
- [Course Syllabus & Milestone Rubric](../../../syllabus/syllabus.md)
