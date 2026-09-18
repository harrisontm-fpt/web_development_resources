# Session 15 — Final delivery studio

[Session index](../README.md) · [Student workshop](workshop.md)

**Week 8 · Three-hour support studio**
**These notes support the opening briefing and individual clinics; there is no separate 60-minute lecture.**

## Learning goals

Demonstrate readiness through independent checks, rehearse a concise presentation, and make the submission understandable to another person.

## Studio schedule

| Minutes | Activity |
| --- | --- |
| 0–15 | Release triage and priorities |
| 15–75 | Targeted fixes and lecturer support |
| 75–135 | Cross-team README checking and team rehearsal |
| 135–180 | Final corrections, evidence, and readiness check |

## Check readiness, not just completion

A feature can be implemented but difficult for an assessor to find. A deployment can load while its API is unavailable. A README can contain instructions that depend on undocumented local setup.

Ask someone who did not write the instructions to follow them. Observe where they need help, then repair the instructions or application. Record whether they completed the setup or only inspected it; a read-through is not the same evidence as a clean run.

Use a known candidate commit for final checks. If a later fix changes behaviour, retest affected scenarios and update the evidence. Keep the public application aligned with the version you intend to submit.

## Build a concise demonstration

A good demonstration connects the problem to working user outcomes. Use realistic data and rehearse the exact path:

- Introduce team, problem, intended users, and value.
- Identify the main features and scope.
- Demonstrate essential journeys.
- Explain how an assessor can test and find features.
- Briefly acknowledge contributions, decisions, and limitations.

Aim for nine minutes so the presentation remains below the ten-minute limit. Follow it with approximately five minutes of questions. All members participate and can answer technical questions. Slides are optional; the README can support the demonstration.

Avoid spending most of the presentation listing technologies or scrolling through source. Show value and behaviour first, then explain decisions where they help the audience understand the work.

## Make questions concrete

Practise answering:

1. What happens when the API request fails?
2. How do you know the saved record persists?
3. Where is the permission rule enforced?
4. Which user feedback changed your design?
5. What did each member contribute and learn?

An honest explanation of a limitation is more informative than a claim you cannot demonstrate. If the public demo fails, explain the failure and use a local fallback to show progress, while still meeting public availability for final assessment.

## Prepare peer evaluation

Each team must test both other projects in session 16. Prepare the public URL, test instructions, safe demonstration access if needed, and a feedback form with all required questions. A form participation link and a results link serve different purposes; verify that the lecturer can open the results.

Give testers tasks that reveal whether essential features are discoverable. Do not expose production administrator credentials to make testing convenient.

## Final handover

The final release is due 48 hours after session 16 ends. Include its public application, README/setup/testing instructions, design and quality evidence, contribution and AI records, and feedback results. Release notes identify post-feedback fixes and known limitations.

**Readiness question:** Can a person outside your team locate the main feature, understand how to test it, and identify which version your evidence describes?

## Preparation and reading

Lecturer: prioritise blockers during support; keep rehearsal and handover checking protected.

- [Presentation and final delivery checklists](../../reviews_and_delivery.md)
- [Final assignment](../../../syllabus/final_assignment.md)
