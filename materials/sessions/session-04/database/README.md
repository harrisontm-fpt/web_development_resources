# Session 4 supplement — MariaDB with GET and POST

[Session index](../../README.md) · [Session 4 UX lecture](../lecture.md) · [Session 4 UX workshop](../workshop.md)

**Optional and ungraded · Additional 30-minute lecture + 60-minute workshop**

Build an Express API that reads and writes campus activities in MariaDB. Follow a request from Postman through a handler and SQL, then prove that a saved activity survives a backend restart. Basic JavaScript and SQL are assumed.

## Start here

1. [Pre-class setup](setup.md) — install MariaDB on Windows or macOS, create the exercise database, and check the connection.
2. [Lecture slides](lecture.md) — 14 plain Markdown slides separated by `---`, with lecturer notes in HTML comments.
3. [Student workshop](workshop.md) — timed steps, three coding tasks, hints, and expected responses.
4. [Starter](starter/README.md) or [download starter ZIP](starter.zip) — runnable scaffold; unfinished handlers return `501`.
5. [Reference solution](solution/README.md) — complete handlers with the same structure.
6. [Lecturer guide](lecturer-guide.md) and [verification report](verification.md).

Preview the slides in a Markdown viewer that supports Mermaid. A text equivalent accompanies the diagram. No presentation framework or frontend build is required.

## Learning outcomes

Students will be able to:

- Trace GET through SELECT and POST through INSERT.
- Use a connection pool and await a database operation.
- Bind request values to SQL parameters.
- Return a list, one record, or a newly created record with suitable HTTP status codes.
- Explain validation failures, missing records, and connection failures.
- Demonstrate persistence independently of the Node process.

## Stack and boundaries

Node.js 24, JavaScript ES modules, Express 5, dotenv, mysql2/promise, and local MariaDB. The course already uses mysql2; here it connects to MariaDB. Each code folder includes its own manifest, lockfile, request examples, schema, seeds, and tests.

The application has one table: activities with `id`, `title`, and `details`. Students complete both SQL and responses in three handlers. Connection setup, routing, validation, and error handling are supplied.

The campus theme continues session 3, but this is a separate application with no login requirement. Run only one teaching API on port 3000 at a time. The optional authentication discussion explains how to protect writes later.

This localhost exercise has public reads and writes. It does not introduce new requirements for project briefs. User persistence, joins, update/delete routes, a frontend, and deployment are outside this workshop.

## Course connections

- [Session 3 authentication](../../session-03/authentication/README.md): authentication and authorisation can precede the POST handler.
- [Session 6 backend foundations](../../session-06/lecture.md): the same activities schema supports later filtering and deployment.
- [Session 8 integration](../../session-08/lecture.md): a frontend can call the same HTTP interface.
- [WSK database material](../../../../reference_materials/WSK-main/Week3/05-database.md): connection pools and prepared parameters.

Use this in additional teaching time or independent study. The session 4 UX lesson, proposal requirements, and main timetable remain unchanged.