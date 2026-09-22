# Session 3 supplement — Logins and access tokens

[Session index](../../README.md) · [Session 3 requirements lecture](../lecture.md) · [Session 3 requirements workshop](../workshop.md)

**Optional and ungraded · 30-minute lecture + 60-minute workshop**

For students who know basic JavaScript and want an early introduction to the authentication their projects will need. This supplement leaves the existing session 3 requirements lesson and timetable intact; use it in additional teaching time or independent study.

## Start here

1. [Lecture slides](lecture.md) — 14 plain Markdown slides separated by `---`; lecturer notes are in HTML comments.
2. [Student workshop](workshop.md) — timed steps, hints, Postman/curl examples, troubleshooting, and a later SQL bridge.
3. [Starter](starter/README.md) — runnable Express scaffold with three focused TODOs.
4. [Reference solution](solution/README.md) — the same structure with authentication completed.
5. [Lecturer guide](lecturer-guide.md) — preparation, demonstration cues, expected answers, and verification notes.

Preview the slides in a Markdown viewer with Mermaid support, such as GitHub's rendered Markdown. The file also includes a text explanation of the request-flow diagram. No slide framework, PowerPoint export, or frontend build is required.

## Learning outcomes

Students will be able to:

- Distinguish authentication from authorisation.
- Explain why the server stores password hashes and verifies bearer tokens.
- Log in through an API client and use the returned token on a protected request.
- Recognise malformed input, invalid credentials/tokens, expiry, and insufficient permissions.
- Explain why deleting a client token does not invalidate every copy.
- Identify one backend access rule from their own project brief.

## Stack and boundaries

Use **Node.js 24 LTS**, JavaScript ES modules, Express, dotenv, bcrypt, and jsonwebtoken. Jest/Supertest provides executable checks. Both code folders contain their own package manifest and lockfile; copy either folder into a practice repository if preferred.

The core exercise uses fictional in-memory users with precomputed password hashes. MySQL/mysql2 and React remain later steps, consistent with the unit's backend and React sequence. The [SQL bridge](workshop.md#bridge-to-mysql-and-react) explains what changes when user lookups become asynchronous database queries.

The campus activities example is shared practice, not an added feature requirement for the client briefs. The example is local-only teaching code, with no registration, password reset, refresh tokens, revocation, or deployment configuration.

## Connection to the existing course

- [WSK authentication material](../../../../reference_materials/WSK-main/Week3/06-auth.md) uses the same Express/bcrypt/JWT concepts.
- [Session 6 backend lecture](../../session-06/lecture.md) introduces SQL-backed endpoints.
- [Session 8 application integration](../../session-08/lecture.md) connects the frontend and API.
- [Session 11 integration tests](../../session-11/lecture.md) develops the test-writing skills previewed here.

The new examples use short-lived tokens, avoid logging login bodies, and keep the signing secret server-side. Follow the supplement's complete examples and exact endpoint paths when doing this workshop.
