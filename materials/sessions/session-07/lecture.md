# Session 07 — Turning wireframes into React

[Session index](../README.md) · [Student workshop](workshop.md)

**Week 4 · Lecture: 60 minutes · Applies WSK React fundamentals**

## Learning goals

Identify useful component boundaries, distinguish props from state, and build a small interactive screen from a wireframe.

## Teaching sequence

| Minutes | Focus |
| --- | --- |
| 0–10 | Retrieve array methods, functions, and wireframe decisions |
| 10–25 | Component hierarchy and props |
| 25–40 | State, events, and derived values |
| 40–50 | Work through the example |
| 50–60 | Inspect common mistakes and explain the workshop |

## From screen regions to components

Start with the wireframe and representative data. An ActivitiesPage can contain a search field and an ActivityList; each repeated item can be an ActivityCard. A component boundary is useful when it creates a coherent responsibility or reusable element. Every HTML element does not need its own component.

Props carry values from a parent. State remembers values that change through interaction. If the list and result count depend on the same search text, keep that text in their common owner.

Build a static version first, then add the minimum necessary state. Calculate the filtered list and count from existing data rather than storing duplicate values. This approach follows [Thinking in React](https://react.dev/learn/thinking-in-react).

## Worked example

This complete component runs as App.jsx in the WSK React project. It uses sample data; session 8 replaces that source with the API.

~~~jsx
import {useState} from 'react';

const sampleActivities = [
  {id: 1, title: 'Board games', details: 'Meet in Room A'},
  {id: 2, title: 'Drawing club', details: 'Bring a sketchbook'},
];

function ActivityCard({activity}) {
  return (
    <li>
      <h2>{activity.title}</h2>
      <p>{activity.details}</p>
    </li>
  );
}

export default function App() {
  const [query, setQuery] = useState('');
  const visible = sampleActivities.filter((activity) =>
    activity.title.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <main>
      <h1>Campus activities</h1>
      <label htmlFor="activity-search">Search activities</label>
      <input
        id="activity-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <p>{visible.length} activities found</p>
      {visible.length === 0 ? (
        <p>No matching activities. Try another search.</p>
      ) : (
        <ul>
          {visible.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </ul>
      )}
    </main>
  );
}
~~~

Trace one keystroke: onChange passes the input value to setQuery; React renders with the updated query; filter calculates visible records; JSX describes the resulting interface.

The id key identifies each list item across renders. Avoid array positions as keys when items can be reordered, inserted, or removed. Component names begin with a capital letter so JSX treats them as components.

## State is updated, not edited in place

Use the state setter. For arrays, create a new array when updating:

~~~js
setActivities((current) => current.filter((item) => item.id !== removedId));
~~~

This is an isolated update pattern: setActivities and removedId come from your actual component. Directly mutating an existing state array can leave React and your reasoning out of step. Props should also be treated as read-only.

Keep hooks at the top level of function components or custom hooks. Do not call useState inside a condition or loop.

## Connect the screen to design decisions

Meaningful headings, labels, lists, and buttons remain important in JSX. Componentisation does not replace semantic HTML. Test a narrow viewport and long representative content before polishing colours.

**Check understanding:** Is the filtered list separate state? No, it is derived. Does a card need to own the entire search query? No, keep it where shared dependents can receive what they need. Is sample data evidence of API integration? No.

## Preparation and reading

Lecturer: run the component and demonstrate a match, no match, and clearing the field.

- [WSK React introduction](../../../reference_materials/WSK-main/Week4/01-react-start.md)
- [WSK state](../../../reference_materials/WSK-main/Week4/02-react-state.md)
- [UX workbook](../../ux_workbook.md)
