# Session 09 — React forms and complete features

[Session index](../README.md) · [Student workshop](workshop.md)

**Week 5 · Lecture: 60 minutes**

## Learning goals

Build a controlled form, distinguish client feedback from server validation, and coordinate saved data, routing, and shared state.

## Teaching sequence

| Minutes | Focus |
| --- | --- |
| 0–10 | Retrieve checkpoint findings and select a complete journey |
| 10–25 | Controlled fields, validation, and submission states |
| 25–40 | Trace a save request and update the interface |
| 40–50 | Routing, state ownership, custom hooks, and context |
| 50–60 | Discuss failures and the worked example |

## A form is a stateful conversation

A field displays a value, accepts a change, and eventually participates in a submission. A controlled field has its value in React state and updates that state in onChange.

Plan idle, submitting, success, and failure behaviour. Disable repeated submissions while one is pending, preserve entered values when saving fails, and clear fields only after confirmed success. A disabled button is feedback, not protection against malicious or repeated API requests.

Client validation catches simple problems promptly. The server must independently validate the request and enforce permissions. Hiding an administration link is not authorisation. Use the WSK authentication approach where required, including the relevant server-side controls; do not invent public write access for the campus example.

## Contract before code

The following teaching component expects a project endpoint with this contract:

~~~text
POST /api/activities
JSON body: { title: nonblank string up to 120 characters, details: string }
201: { id, title, details } for the saved record
400: invalid input
401/403: unauthenticated or not permitted, where access control applies
500: unexpected server failure
~~~

**The GET-only server from session 6 does not implement this POST route.** Implement and verify it using WSK routing, validation, and parameterised INSERT first. Agree a reasonable details-length limit with your team and enforce it consistently. Adapt authentication and anti-CSRF handling to the project's chosen approach before using privileged mutations.

## Worked frontend component

This is a complete form component for a same-origin endpoint with the contract above. Mount it in your existing app after the backend works; it does not add an authentication flow.

~~~jsx
import {useState} from 'react';

export default function ActivityForm() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (pending) return;
    setError('');
    setSaved(null);
    if (!title.trim() || title.trim().length > 120) {
      setError('Enter a title between 1 and 120 characters.');
      return;
    }
    setPending(true);
    try {
      const response = await fetch('/api/activities', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: title.trim(), details}),
      });
      if (!response.ok) throw new Error('Save failed');
      const activity = await response.json();
      setSaved(activity);
      setTitle('');
      setDetails('');
    } catch {
      setError('Could not save. Your text is still here; please try again.');
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add activity</h2>
      <label htmlFor="title">Title</label>
      <input id="title" value={title} required maxLength={120}
        onChange={(event) => setTitle(event.target.value)} />
      <label htmlFor="details">Details</label>
      <textarea id="details" value={details}
        onChange={(event) => setDetails(event.target.value)} />
      <button type="submit" disabled={pending}>
        {pending ? 'Saving...' : 'Save activity'}
      </button>
      {error && <p role="alert">{error}</p>}
      {saved && <p role="status">Saved: {saved.title}</p>}
    </form>
  );
}
~~~

Discuss a subtle failure: a server might save successfully but its response could be lost. Retrying a create operation can duplicate data. Treat operations with serious duplicate consequences according to the domain; the UI's pending state alone does not solve this.

## Routing and shared state

A route maps a URL to a view. Test direct navigation and reload as well as clicking links. After saving, show the server-confirmed result and refresh the relevant list or navigate to a detail view; do not leave stale data pretending the save failed.

Keep state local until multiple consumers need it. Lift state to a common owner when needed. A custom hook reuses stateful logic; separate calls do not automatically share one state instance. Context supplies a value to descendants and can suit session/user state. It is unnecessary for every text field.

**Check understanding:** Does a green client validation message prove the server accepts the request? No. Does calling the same custom hook in two components share their state? No.

## Preparation and reading

Lecturer: prepare one project-appropriate POST example with WSK validation/access controls.

- [WSK forms](../../../reference_materials/WSK-main/Week5/03-forms.md)
- [WSK custom hooks](../../../reference_materials/WSK-main/Week5/02-custom-hooks.md)
- [WSK context](../../../reference_materials/WSK-main/Week5/04-context.md)
- [WSK authentication](../../../reference_materials/WSK-main/Week3/06-auth.md)
- [WSK routing](../../../reference_materials/WSK-main/Week4/03-react-routing.md)
