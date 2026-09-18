# Session 04 — UX discovery and wireframes

[Session index](../README.md) · [Student workshop](workshop.md)

**Week 2 · Lecture: 60 minutes**

## Learning goals

Explain a task flow, sketch a usable mobile/desktop journey, and use observations to improve a prototype before implementation.

## Teaching sequence

| Minutes | Focus |
| --- | --- |
| 0–10 | Retrieve the primary user and most important task |
| 10–25 | User context, task flows, and information architecture |
| 25–40 | Wireframes, mock-ups, and interface states |
| 40–50 | Demonstrate an observed prototype test |
| 50–60 | Interpret findings and check understanding |

## Design around a task

UX concerns how someone accomplishes a goal with the product. UI is the interface through which they act. A visually attractive screen can still leave a visitor unable to locate attendance instructions.

Identify the task, context, and information needed to act. A person browsing on a phone between classes may need a concise list, meaningful dates, and obvious navigation. These are hypotheses until supported by the brief or observation; avoid inventing elaborate personas without evidence.

Information architecture is the organisation and naming of content. Group items by how users expect to find them. Internal team terminology may be unfamiliar to visitors.

## Draw the flow before polishing screens

For the campus example:

~~~text
Activity list -> select an activity -> read details -> find attendance instructions
       |
       +-> no activities -> explain the situation and provide a next action
~~~

A task flow exposes missing transitions. Where does the visitor start? How do they go back? What happens when the activity no longer exists?

A wireframe is a low-detail layout showing content and controls. A mock-up adds visual decisions such as typography and colour. A prototype simulates interaction; it can be paper screens revealed by a teammate. These are different kinds of evidence, not mandatory stages requiring expensive software.

## Include states, not only ideal screens

Sketch loading, empty, error, and success states where relevant. A blank area while data loads looks different to the developer who knows a request is running and the visitor who does not.

For each form, show a visible label, essential instructions, errors, and recovery. Placeholder text is not a substitute for a persistent label. Accessible form structure helps people understand controls and feedback; see the [W3C forms tutorial](https://www.w3.org/WAI/tutorials/forms/).

Mobile and desktop wireframes should preserve the same task. Reorder or stack content to support the available space rather than merely shrinking the desktop design. Use meaningful headings and obvious actions.

## Observe a person attempting a task

Give a neutral prompt: “Find an activity you could attend next Friday.” Do not tell them to click the date filter. Ask what they expect before an action, then observe. In a paper prototype, a facilitator presents the next screen without coaching.

Record behaviour: “Tester opened three cards before finding dates.” Then distinguish your interpretation: “Dates may be insufficiently visible.” A design change might show dates in the list. Retest the same task after the change.

One peer test does not represent every target user. It is early evidence that can reveal a problem cheaply. Record who tested and the limits of the observation.

**Check understanding:** Does low fidelity mean missing essential content? No: use representative content. Does a tester's preferred colour prove a usability defect? No: connect findings to tasks and outcomes.

## Preparation and reading

Lecturer: bring two alternative list layouts and paper for a short think-aloud demonstration.

- [UX workbook](../../ux_workbook.md)
- [WSK responsive design](../../../reference_materials/WSK-main/Week1/form/css/media-queries.md)
