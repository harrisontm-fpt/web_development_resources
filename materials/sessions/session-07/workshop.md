# Session 07 workshop — Build a screen from your wireframe

[Lecture](lecture.md) · [Session index](../README.md)

**60-minute workshop + 60-minute project block · Ungraded component/design check**

## Before you start

Open the WSK React project using its documented package scripts. Bring an essential wireframe and representative data matching your planned API. If React setup is unfinished, use the WSK setup instructions linked from the lecture with lecturer support.

## Step 1 — Mark component boundaries (0–10 minutes)

Draw boxes on the wireframe and name the components. Identify repeated elements and where the main data will enter.

Write three short lists: values from props/data, values needing state, and values calculated from them. Choose one small interaction such as search, a selected item, or expanding details.

## Step 2 — Build the static screen (10–30 minutes)

Implement the layout with representative data. Use meaningful headings, labels, lists, and buttons. Render repeated records with stable ids as keys.

The lecture component is a worked pattern, not a required design. Use your own entity names, content, and visual structure. Explain any copied/adapted code according to the course AI/source policy.

## Step 3 — Compare and review (30–45 minutes)

Have the member who did not drive compare the screen with the wireframe:

- Is the main action visible?
- Is the essential information present?
- Does the layout survive a narrow viewport and long content?
- Are any component responsibilities unclear?

Make one justified improvement. Record design changes rather than treating the original sketch as immutable.

## Step 4 — Add a small interaction (45–60 minutes)

Add the chosen state and event handler. Derive filtered data/counts instead of storing duplicated state. Exercise the ordinary and empty/alternative case.

Each member traces an interaction from event to state to updated interface. Rotate the driver for this part.

## Project block (60 minutes)

Use 5 minutes planning, 45 developing the real project's first screen, and 10 documenting/checking it. Request a review before merging the change. Add a task to replace sample data with the real endpoint in session 8.

## Evidence to keep

- [ ] Component hierarchy tied to a project wireframe.
- [ ] Usable React screen with representative data.
- [ ] One explained stateful interaction.
- [ ] Stable list keys and semantic controls.
- [ ] Mobile/content check and review evidence.
- [ ] Clear distinction between sample and live data.

**If nothing renders:** check the browser console, component export/import, and JSX nesting.
**If typing does not update the view:** inspect the input value/onChange pair and which component owns the state.
**If finished early:** add an empty-state action that clears the filter; avoid adding a new product feature.
**Before session 8:** verify the backend can return the agreed JSON independently of React.
