# Session 08 — Connecting React, API, and database

[Session index](../README.md) · [Student workshop](workshop.md)

**Week 4 · Lecture: 60 minutes · Mandatory ungraded checkpoint 1 in the final hour**

## Learning goals

Fetch and render API data, distinguish loading/empty/error/success states, and trace a failure across application layers.

## Teaching sequence

| Minutes | Focus |
| --- | --- |
| 0–10 | Trace last session's data and identify what is still sample data |
| 10–25 | Browser request, HTTP status, response JSON, and state |
| 25–40 | Effects, cleanup, and a retryable screen |
| 40–50 | Diagnose failures using browser and server evidence |
| 50–60 | Prepare a narrow checkpoint demonstration |

## Integration makes assumptions visible

The API can work in an HTTP client while React shows nothing. The browser may be using the wrong origin, the JSON may have a different shape, or the component may be reading the wrong fields. Follow evidence rather than changing several layers at once.

An HTTP failure such as 500 does not automatically make fetch reject. Inspect response.ok before treating the body as success. A network failure and a successful empty array also need different messages.

For the demo, use the GET endpoint from session 6. In development, merge an /api proxy targeting http://localhost:3000 into the existing Vite server.proxy configuration, preserving plugins and other settings, and restart Vite. This forwards browser requests made to the frontend origin. The proxy is a development setting, not a production deployment solution; see [Vite server proxy configuration](https://vite.dev/config/server-options.html#server-proxy).

## Worked example

Replace the sample App with this component. It expects the session 6 API and a same-origin /api path, via the development proxy or a production reverse proxy.

~~~jsx
import {useEffect, useState} from 'react';

export default function App() {
  const [attempt, setAttempt] = useState(0);
  const [view, setView] = useState({
    status: 'loading', activities: [],
  });

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    setView({status: 'loading', activities: []});

    async function load() {
      try {
        const response = await fetch('/api/activities', {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error('Request failed');
        const activities = await response.json();
        if (!Array.isArray(activities)) throw new Error('Unexpected response');
        if (active) setView({status: 'success', activities});
      } catch (error) {
        if (active && error.name !== 'AbortError') {
          setView({status: 'error', activities: []});
        }
      }
    }

    load();
    return () => {
      active = false;
      controller.abort();
    };
  }, [attempt]);

  return (
    <main>
      <h1>Campus activities</h1>
      {view.status === 'loading' && <p role="status">Loading activities...</p>}
      {view.status === 'error' && (
        <div>
          <p role="alert">Could not load activities. Please retry.</p>
          <button onClick={() => setAttempt((n) => n + 1)}>Retry</button>
        </div>
      )}
      {view.status === 'success' && (
        view.activities.length === 0 ? <p>No activities are available.</p> :
        <ul>{view.activities.map((activity) => (
          <li key={activity.id}>
            <h2>{activity.title}</h2>
            <p>{activity.details}</p>
          </li>
        ))}</ul>
      )}
    </main>
  );
}
~~~

The effect synchronises the screen with an external system. Retrying changes attempt, causing a fresh request. Cleanup aborts pending work and prevents an obsolete result from updating the view. Development Strict Mode can perform an extra setup/cleanup cycle; that is not a reason to remove cleanup or disable the mode. The [React effect reference](https://react.dev/reference/react/useEffect) explains this lifecycle.

For larger applications, framework or data-library facilities can organise fetching; here the small example exposes the underlying behaviour.

## Debug in layers

| Observation | Next check |
| --- | --- |
| No request appears | Is the component mounted? Did an earlier JavaScript error occur? |
| Request goes to the wrong host/path | Frontend configuration, development proxy, or API base URL |
| CORS error | Actual browser origin and explicit server policy |
| 500 response | Server logs, SQL query, credentials, and network access |
| 200 but blank UI | JSON shape, field names, and rendering conditions |
| Old data after edits | Request timing and refresh behaviour |

Use browser Network tools to inspect method, URL, status, and response. Use server diagnostics for server failures. Do not log passwords/tokens into shared screenshots.

**Check understanding:** Is an empty list an error? Not necessarily. Does the development proxy ship with the static frontend? No. Why guard obsolete requests? Their results can arrive after the relevant view has changed.

## Preparation and reading

Lecturer: demonstrate success, a stopped local API, retry, and an empty test dataset without deleting project data.

- [WSK hooks](../../../reference_materials/WSK-main/Week4/04-hooks.md)
- [Checkpoint 1 expectations](../../reviews_and_delivery.md)
