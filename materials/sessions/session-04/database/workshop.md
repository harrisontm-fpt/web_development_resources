# Workshop — Read and write campus activities

[Slides](lecture.md) · [Setup](setup.md) · [Supplement guide](README.md) · [Solution](solution/README.md)

**Optional · 60 minutes · Ungraded · Basic JavaScript and SQL assumed**

By the end, demonstrate:

**POST JSON → Express handler → INSERT → saved row → GET → SELECT → JSON.**

Work individually or in pairs, swapping the keyboard after the second task. Installation and database creation belong to [pre-class setup](setup.md). Use fictional activity data.

## 1. Check the starting point (0–10 minutes)

Open a terminal in the extracted starter folder, or from the repository root:

```sh
cd materials/sessions/session-04/database/starter
npm run db:check
npm start
```

Use `npm.cmd` on PowerShell if necessary. A successful connection check names the server version. The server announces `http://127.0.0.1:3000`. Keep it running; use another terminal for checks.

In Postman, make a GET request to `http://127.0.0.1:3000/api/activities`, with **No Auth**. Expect `501`:

```json
{"error":"TODO 1: implement GET /api/activities."}
```

This confirms that the scaffold is responding. Database problems are separate: see [troubleshooting](setup.md#troubleshooting). Use `npm run dev` instead of `npm start` for automatic restarts after code edits.

### Find the moving parts

| File | Supplied responsibility |
| --- | --- |
| `src/server.js` | Load configuration, check MariaDB, listen on localhost |
| `src/db.js` | Create the connection pool |
| `src/app.js` | Route requests and handle errors |
| `src/validation.js` | Check JSON and IDs before querying |
| `src/activities.js` | **Your three tasks: SQL plus HTTP responses** |
| `sql/schema.sql` / `sql/seed.sql` | Create the table and two initial activities |
| `.env` | Local database credentials; never commit |
| `requests.http` | Optional editor-client requests |

`createActivityHandlers(pool)` receives the configured pool and returns handlers. You only need to replace each TODO response inside its existing `async` function. Keep the other handlers intact until you reach them.

## 2. TODO 1 — GET all activities (10–25 minutes)

Implement `list(req, res)` in `src/activities.js`.

Requirements:

1. Await `pool.execute(...)` with a SELECT for `id, title, details` from `activities`, ordered by `id`.
2. Extract the rows from the driver's result.
3. Return status `200` and those rows as JSON.

Restart Node if not using watch mode, then resend GET. On a freshly seeded database:

```json
[
  {"id":1,"title":"Board games","details":"Meet in Room A"},
  {"id":2,"title":"Drawing club","details":"Bring a sketchbook"}
]
```

If you have already created activities, the list will include those too.

<details>
<summary>Hint 1: result shape</summary>

SELECT resolves to `[rows, metadata]`. Use `const [rows] = await pool.execute(...)`. Return the array; do not return the entire driver's result.

</details>

<details>
<summary>Hint 2: SQL and response</summary>

The SQL is `SELECT id, title, details FROM activities ORDER BY id`. Send the result with `return res.status(200).json(rows);`.

</details>

**Explain:** Does GET send SQL directly from Postman? What should the handler return if the table has no rows?

## 3. TODO 2 — GET one activity (25–35 minutes)

Implement `getOne(req, res)`. The supplied line gives you:

```js
const id = res.locals.activityId;
```

Requirements:

1. SELECT the same fields with `WHERE id = ?`.
2. Pass `[id]` separately as the second argument to `pool.execute`.
3. Return `404` with `{"error":"Activity not found."}` when there are no rows.
4. Otherwise return `200` with the first row as one JSON object.

Check in Postman:

| Request | Expected result on a fresh database |
| --- | --- |
| GET `/api/activities/1` | 200, Board games object |
| GET `/api/activities/2147483647` | 404, Activity not found |
| GET `/api/activities/abc` | 400 from the supplied ID validation |

<details>
<summary>Hint: handle absence before sending the row</summary>

Check `rows.length === 0`, send the 404 response, and `return`. Otherwise send `rows[0]`. The `?` placeholder has no quote marks around it inside the SQL statement.

</details>

**Explain:** Why does a missing single record use 404, while an empty collection uses 200?

## 4. TODO 3 — POST a new activity (35–50 minutes)

Implement `create(req, res)`. The supplied line gives you trimmed, validated fields:

```js
const { title, details } = res.locals.activity;
```

Requirements:

1. Execute `INSERT INTO activities (title, details) VALUES (?, ?)` with `[title, details]`.
2. Extract the result header; use its `insertId` for the new ID.
3. Build `{ id, title, details }` with that generated ID.
4. Return status `201`, the activity JSON, and a `Location` header containing `/api/activities/<new ID>`.

In Postman:

1. Select **POST** and `http://127.0.0.1:3000/api/activities`.
2. Select **No Auth**.
3. Choose **Body → raw → JSON**. Confirm `Content-Type: application/json`.
4. Send:

```json
{"title":"Campus coding club","details":"Bring a laptop to Room B."}
```

On a fresh database, the response will resemble:

```json
{"id":3,"title":"Campus coding club","details":"Bring a laptop to Room B."}
```

Retain **your actual returned ID**. IDs may differ or have gaps. Inspect the response Headers tab for `Location`, then GET that path. Repeating POST creates another activity; it does not update the previous one.

<details>
<summary>Hint 1: INSERT differs from SELECT</summary>

Use `const [result] = await pool.execute(sql, values);` and then `result.insertId`. Do not expect SELECT rows from INSERT.

</details>

<details>
<summary>Hint 2: set the header and response</summary>

After building `activity`, use:

```js
return res.location(`/api/activities/${activity.id}`)
  .status(201).json(activity);
```

</details>

Send `{"title":"   ","details":"Bring a laptop."}`. Expect `400`; the handler should never insert this record. Try `Student's coding club` as a valid title: the apostrophe must be preserved.

**Explain:** Why are validation and bound parameters both needed?

## 5. Prove persistence and check your work (50–60 minutes)

1. GET the ID returned by your successful POST.
2. In the MariaDB client connected as `session04_app`, inspect the row. Replace 3 with your ID:

```sql
SELECT id, title, details FROM activities WHERE id = 3;
```

3. Stop **the Node API** using Ctrl+C. Leave MariaDB running.
4. Restart using `npm start` and GET the same ID. The activity should still exist.
5. In another terminal, run:

```sh
npm test
```

These checks use a test double for the database to check handler behaviour without changing your records. They do not prove that your SQL runs on MariaDB; the real requests and SQL inspection above do. The lecturer guide supplies an additional real-database suite.

Before completing the tasks, some final-contract tests deliberately fail. `npm run test:scaffold` is only for the untouched starter, and will stop passing after you implement handlers.

### Evidence to keep

- [ ] GET collection and single-record responses.
- [ ] POST request, 201 response, generated ID, and Location header.
- [ ] Matching SQL row and successful GET after the Node restart.
- [ ] A 400 and a 404 response, with a short explanation of each.
- [ ] Your completed handlers and passing contract checks.

Keep credentials and `.env` out of screenshots, commits, and shared evidence. This exercise is ungraded.

### Exit questions

Where do HTTP requests become SQL? What does INSERT return to Node? Why do records remain after Node stops? Why should a frontend never receive the database password?

## curl alternative

Run from the starter folder. On **Windows PowerShell use `curl.exe`** for every command below; `curl` can be a PowerShell alias. On macOS use `curl`.

```sh
curl -i http://127.0.0.1:3000/api/activities
curl -i http://127.0.0.1:3000/api/activities/1
curl -i -X POST http://127.0.0.1:3000/api/activities -H "Content-Type: application/json" --data-binary "@requests/create-activity.json"
curl -i -X POST http://127.0.0.1:3000/api/activities -H "Content-Type: application/json" --data-binary "@requests/invalid-activity.json"
```

Use the ID returned by POST when checking the created record. Request bodies are files to avoid differences in shell quoting.

## If you finish early

- Create two activities with the same title. Explain why both are valid records with distinct IDs in this schema.
- Use a title with an apostrophe and compare POST, SQL, and GET values.
- Trace an invalid body through `validateActivity`. Show why SQL never runs.
- Sketch which table and fields one actual project feature would need.

## Optional bridge — Add authentication later

Compare with [session 3](../../session-03/authentication/README.md). An integration could put `requireAuth`, then an organiser permission check, before POST validation and the insert handler. Public GET could stay public if the project brief allows it.

A token identifies an application user; the MariaDB account is the backend's connection identity. They serve different purposes. Never accept a role from the POST body as proof of permission. Authentication is a separate follow-up, not a required change to this starter.