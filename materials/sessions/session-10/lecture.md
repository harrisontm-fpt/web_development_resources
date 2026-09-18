# Session 10 — UI quality and usability testing

[Session index](../README.md) · [Student workshop](workshop.md)

**Week 5 · Lecture: 60 minutes**

## Learning goals

Improve hierarchy and responsive behaviour, inspect accessible interaction, and prioritise usability findings using task evidence.

## Teaching sequence

| Minutes | Focus |
| --- | --- |
| 0–10 | Retrieve an essential journey and its audience |
| 10–25 | Hierarchy, spacing, typography, and consistency |
| 25–40 | Responsive and keyboard/form checks |
| 40–50 | Demonstrate a neutral usability test |
| 50–60 | Prioritise findings and prepare test tasks |

## Make the next action understandable

Visual hierarchy tells users what matters first. Use headings, grouping, spacing, and a clear main action to support a task. If every button has equal emphasis, the visitor must infer the sequence.

Consistency reduces relearning: the same operation should use the same label and control style. Define a small shared set of spacing, text, and button conventions rather than styling each screen independently. Use representative content: a layout that works only with short placeholder text can fail when real titles arrive.

A design decision should have a reason connected to the task. “We moved attendance instructions beside the time and location because testers missed them” is stronger than “this looked more modern.”

## Responsive behaviour is a reorganisation

Inspect the actual content at narrow and wide widths. Stacking a form may be more useful than shrinking its desktop columns. Avoid fixed dimensions that clip long text or force horizontal scrolling for ordinary content.

This optional CSS pattern creates flexible cards; integrate it with your existing styles rather than adding an unrelated framework:

~~~css
.activity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  gap: 1rem;
  padding: 0;
  list-style: none;
}
.activity-grid > li {
  overflow-wrap: anywhere;
}
button, input, textarea {
  font: inherit;
}
~~~

Inspect the result with real content and browser zoom. A CSS rule is not proof that the complete page is usable.

## Accessibility is part of normal implementation

Use keyboard Tab and Shift+Tab to reach controls, Enter/Space as appropriate to activate them, and check visible focus. Prefer native controls to clickable generic elements. Use meaningful headings, labels, and image alternatives. Never remove focus indication without an equally visible replacement.

Forms need instructions and recoverable feedback, not just a red border. Associate additional guidance/errors with fields where appropriate. The [W3C forms tutorial](https://www.w3.org/WAI/tutorials/forms/) provides patterns for labels, instructions, and notifications.

Lighthouse helps identify technical findings, but neither its score nor a checklist replaces observing someone complete the task. We perform the formal release audit in session 13.

## Observe, interpret, decide

Give a tester a realistic goal: “Find where the drawing club meets.” Avoid “click Details under Drawing club.” Ask them to think aloud, then record behaviour without coaching.

| Observation | Interpretation to investigate | Possible change |
| --- | --- | --- |
| Tester opens several cards to find dates | Dates may be missing from the list | Show date alongside each title |
| Tester repeats Save after a delay | Pending feedback may be unclear | Show progress and prevent repeat clicks |
| Keyboard focus disappears | Focus styling or DOM order may be broken | Repair focus visibility and order |

Prioritise task blockers, then difficulties affecting essential work, then cosmetic issues. Keep observed facts separate from guesses. A peer test is useful but does not establish that all target users will succeed.

**Check understanding:** Is “I prefer blue” a task failure? No. Does an automated accessibility score prove keyboard completion? No. When should you retest? After changing the affected interaction.

## Preparation and reading

Lecturer: demonstrate a test in which the facilitator stays silent long enough to observe a difficulty.

- [UX observation and improvement tables](../../ux_workbook.md)
- [WSK forms](../../../reference_materials/WSK-main/Week1/form/form.md)
- [WSK responsive design](../../../reference_materials/WSK-main/Week1/form/css/media-queries.md)
