# Lecturer guide — MariaDB with GET and POST

[Slides](lecture.md) · [Workshop](workshop.md) · [Setup](setup.md) · [Solution](solution/README.md) · [Verification](verification.md)

**Additional 30-minute lecture + 60-minute workshop; optional and ungraded.**

Students know basic SQL. The new skill is connecting HTTP handlers to database operations. Keep the existing session 4 UX materials and proposal expectations unchanged.

## Prepare before class

- Complete the Windows or macOS [setup guide](setup.md) on a classroom machine. Students need installation time before the workshop.
- Use Node 24 and install with `npm ci`. Check both folders independently. The solution and starter can use the same local exercise database but must not run on the same HTTP port simultaneously.
- Use the application account for Node, with only SELECT/INSERT on the activities table.
- Run `npm run db:check` and rehearse Postman GET, POST, GET by returned ID, and a Node restart.
- Run `npm test` in the solution and `npm run test:scaffold` in the untouched starter. An incomplete starter is expected to fail some completed-contract tests.
- Rehearse real SQL with the separate test database below. Automated handler tests use a test double and cannot establish SQL correctness.
- Preview the Markdown slides in a Mermaid-capable viewer. Notes are HTML comments; a text equivalent accompanies the diagram.
- Distribute [starter.zip](starter.zip), not a copied node_modules folder. Keep the setup guide and workshop accessible alongside it. The ZIP's README also contains standalone setup instructions.
- If installation is blocked, pair the student with someone whose setup works and arrange follow-up setup support; the solution still requires MariaDB.

## Facilitation

| Lecture minutes | Slides | Focus |
| --- | --- | --- |
| 0–4 | 1–2 | Observe the finished flow and identify component responsibilities |
| 4–8 | 3–4 | Trace HTTP/SQL and recall the schema |
| 8–12 | 5–6 | Connection configuration, pools, and awaiting results |
| 12–18 | 7–9 | List, single-record retrieval, and bound values |
| 18–23 | 10–11 | INSERT, generated IDs, and supplied validation |
| 23–28 | 12–13 | Response codes and persistence demonstration |
| 28–30 | 14 | Predictions and workshop handoff |

Workshop: 10 minutes setup checks, 15 list handler, 10 single-record handler, 15 create handler, 10 verification. Installation overruns should be handled outside the coding hour.

### Demonstration sequence

1. GET the collection; predict the response shape.
2. GET ID 1, then an absent ID; distinguish object, array, and missing record.
3. POST a new activity; retain the actual ID and inspect Location.
4. GET that ID, then SELECT the row in the SQL client.
5. Stop Node, restart Node, and GET the same ID.
6. POST a blank title and show the 400 response.

Do not reset the database between requests. Repeating POST creates a new record. IDs need not be consecutive, and a previously used database will contain more than the two seeds.

## Exact task answers

Students edit only `src/activities.js`. Replace each TODO response and its comments; preserve the factory and surrounding handlers.

### TODO 1 — list

```js
const [rows] = await pool.execute(
  'SELECT id, title, details FROM activities ORDER BY id',
);
return res.status(200).json(rows);
```

Checkpoint: collection GET changes from 501 to 200. Other unfinished valid routes still return 501. An empty list is 200, not 404.

### TODO 2 — getOne

Retain the supplied `const id = res.locals.activityId;`, then add:

```js
const [rows] = await pool.execute(
  'SELECT id, title, details FROM activities WHERE id = ?', [id],
);
if (rows.length === 0) {
  return res.status(404).json({ error: 'Activity not found.' });
}
return res.status(200).json(rows[0]);
```

Checkpoint: existing ID returns an object; missing valid ID returns 404; malformed ID returns 400 before the handler.

### TODO 3 — create

Retain `const { title, details } = res.locals.activity;`, then add:

```js
const [result] = await pool.execute(
  'INSERT INTO activities (title, details) VALUES (?, ?)', [title, details],
);
const activity = { id: result.insertId, title, details };
return res.location(`/api/activities/${activity.id}`).status(201).json(activity);
```

Checkpoint: POST returns 201, a generated ID, and Location. Subsequent GET and SQL inspection find the row, including after restarting Node.

## Explain the supplied code

The factory receives a pool so tests can supply a test double without connecting to MariaDB. Students do not need to design this structure.

`res.locals` carries checked values through one request. The validators trim text and ignore a client-supplied ID; MariaDB assigns the ID. The handler's async query rejection reaches the Express 5 error middleware, which returns generic JSON.

The connection check reads the server version and verifies access to the table before the HTTP server starts. The runtime pool is closed during normal shutdown. MariaDB autocommit makes each successful INSERT persist; this single-table activity does not need a multi-step transaction.

The schema and seed files are setup tools, run by the administrator in a selected practice database. They never DROP, truncate, or overwrite an existing row. Fixed seed IDs make repeat imports safe; they are not a schema migration system and do not change an incompatible pre-existing table.

## Real MariaDB integration checks

This is lecturer preparation or independent follow-up, outside the core hour.

**The integration suite deletes every row in `session04_activities_test.activities` before and after its run. Never store student work there.** It requires that exact database and account name and a local host. It does not read the normal `.env` as its test configuration.

In a local administrator SQL session:

```sql
CREATE DATABASE IF NOT EXISTS session04_activities_test
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE session04_activities_test;
```

Run `SOURCE /absolute/path/to/solution/sql/schema.sql;` using your actual path. Do not seed manually; the test imports seed.sql twice. Then choose a separate local test password and run:

```sql
CREATE USER IF NOT EXISTS 'session04_test'@'127.0.0.1'
  IDENTIFIED BY 'replace-with-your-local-test-password';
GRANT SELECT, INSERT, DELETE ON session04_activities_test.activities
  TO 'session04_test'@'127.0.0.1';
```

In the solution folder, copy `.env.test.example` to `.env.test`, then enter that test password and the correct MariaDB port. Keep the fixed database/account names. Run:

```sh
npm run test:db
```

The suite starts its own API child process on an available localhost HTTP port, checks an empty collection, seeds twice, creates a record containing an apostrophe and SQL-like text, verifies the stored row, restarts the actual API process, checks persistence, and verifies missing-record/input responses. It closes the child and connection pool and clears the test rows.

Expected final output begins `PASS: empty list, repeatable seeds...`. A failure is not a pass; inspect the first assertion and connection prerequisites. Run only one integration suite at a time against this test database.

To verify schema repeatability too, source schema.sql and seed.sql twice as administrator in the **exercise** database, then confirm existing student records remain unchanged. Do not grant CREATE/DELETE privileges to the application account for this check.

## Common teaching pitfalls

| Observation | Coaching response |
| --- | --- |
| Student returns the entire execute result | SELECT returns rows plus metadata; extract rows with destructuring. |
| GET one returns an array | This route promises one object; return rows[0] after checking length. |
| INSERT response has no ID | INSERT returns a result header; use result.insertId. |
| SQL uses concatenation | Use placeholders and a separate values array; test an apostrophe. |
| Response is sent twice | Return immediately after sending the 404 branch. |
| Every POST creates another row | Expected here; POST is not an update and there is no deduplication rule. |
| Starter test failure seems alarming | Distinguish completed-contract checks from the untouched-scaffold checks. |
| Student wants to put DB_PASSWORD in the frontend | The frontend sends HTTP; only the backend needs the database connection identity. |

## Exit answers and project transfer

- **Where does HTTP become SQL?** Inside the Express activity handler after validation.
- **What does INSERT return?** A result header including the generated insertId; the handler creates the JSON response.
- **Why does data survive Node restarting?** MariaDB retains the committed row independently of the Node process.
- **Why can an empty collection return 200?** The query completed successfully and found no rows.
- **Why parameterise validated input?** Validation enforces the application's field rules; binding keeps values separate from SQL instructions.
- **Where does authentication fit?** Before protected handlers, followed by permission checks appropriate to the project brief. Database permissions and application-user permissions are distinct.

Ask each team to map one required feature to a table, a read request, and a write request. Do not make campus activities or organiser roles an extra requirement for every project.

## Sources and further reading

- [mysql2 promise API, pools, and execute](https://sidorares.github.io/node-mysql2/docs).
- [mysql2 prepared statements](https://sidorares.github.io/node-mysql2/docs/documentation/prepared-statements).
- [Express error handling](https://expressjs.com/en/guide/error-handling/).
- [MariaDB documentation](https://mariadb.com/docs/server).
- [WSK database connection material](../../../../reference_materials/WSK-main/Week3/05-database.md).

See [verification.md](verification.md) for the environment actually tested and any remaining classroom checks.