# UX, wireframes, and usability workbook

Use in sessions 4 and 10, then revisit during final refinement. Keep sketches, observations, and decisions together and link them from your project README. Paper sketches are sufficient initially; use a shared digital tool when it helps collaboration. The purpose is to make and test design decisions.

## 1. Understand the user and task

| Prompt | Team response |
| --- | --- |
| Who is the primary user? | |
| What are they trying to accomplish? | |
| Where, on what device, and under what constraints? | |
| What information do they need before acting? | |
| What does success look like? | |
| What is confirmed, and what is still an assumption? | |

Write the main flow as a short sequence, for example: **open activity list → filter by date → open details → find attendance instructions**. Add important alternatives such as no matching activities or a failed request.

## 2. Wireframe the journey — session 4

1. Sketch the main screens at mobile and desktop widths. Label the purpose of each screen.
2. Show navigation, headings, real or representative content, and the main action.
3. Include loading, empty, success, and error states where relevant.
4. For forms, show labels, instructions, validation feedback, and recovery steps.
5. Connect the screens to show the user's path. Keep decoration secondary at this stage.
6. Give another team a realistic task without telling them which controls to use. On paper, a teammate can reveal the next screen when the tester indicates an action.
7. Record what happened and revise at least one issue supported by observations.

**Workshop timing:** 10 minutes task flow, 25 wireframes, 15 peer test, 10 revision.

| Screen / state | Wireframe link | User need addressed | Question to test |
| --- | --- | --- | --- |
| | | | |

## 3. Translate design into React — session 7

Mark repeated interface elements on the wireframe: layout, navigation, list, card, field, and feedback message. Draw a simple component hierarchy. Identify which values come from props/API data, which require state, and which can be calculated from existing values.

Build a static screen with sample data first, then add interaction and connect the API. Explain state ownership before introducing shared context. Use [Thinking in React](https://react.dev/learn/thinking-in-react) as a supporting reading.

## 4. Review UI quality — session 10

- [ ] The main action and information hierarchy are clear.
- [ ] Spacing, typography, colour, and repeated components are consistent.
- [ ] Content is readable and usable at mobile and desktop widths.
- [ ] Interactive elements work with the keyboard and have visible focus.
- [ ] Forms have meaningful labels, instructions, and actionable error feedback.
- [ ] Loading, empty, success, and error states are understandable.
- [ ] Images have appropriate text alternatives and controls have meaningful names.
- [ ] Important information is not communicated through colour alone.

The [W3C forms tutorial](https://www.w3.org/WAI/tutorials/forms/) supports labels, instructions, and feedback. Use Lighthouse alongside manual inspection and task-based testing; an automated score alone does not establish usability or accessibility.

## 5. Run a usability test

Prepare two or three realistic tasks, such as “Find an activity you could attend next Friday.” Avoid instructions such as “Click the date filter.” Tell testers that the application is being tested, not their ability. Ask them to explain what they expect, observe without coaching, and help only after recording where they became stuck.

For session 10, spend 10 minutes preparing tasks, 30 observing a different team, and 20 discussing and prioritising findings. Rotate observer/facilitator duties so everyone participates. Obtain intended-user/client feedback when available and label peer feedback honestly when peers are not representative users.

| Date / build | Tester type, device, and context | Task | Completed independently? | Observed difficulty or quote | Severity / suggested next action |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

Prioritise blockers first, then difficulties that affect essential tasks, then cosmetic issues. Separate observed behaviour from your interpretation and from personal visual preferences. Record only information needed for the evaluation; names are not needed in the observation table.

## 6. Record improvements and retest

| Finding | Design/implementation change | Owner / card | Retest result | Evidence |
| --- | --- | --- | --- | --- |
| | | | | |

Retest the affected task after the change. Preserve the link between the original wireframe, observation, and final interface; this demonstrates how feedback improved the product.

Final-session peer feedback has specific required form questions. Use the [presentation and delivery guide](reviews_and_delivery.md#peer-testing-and-feedback) to prepare that form before session 16.
