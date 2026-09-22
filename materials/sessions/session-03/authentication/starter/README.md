# Authentication starter

[Student workshop](../workshop.md) · [Slides](../lecture.md) · [Lecturer guide](../lecturer-guide.md)

A runnable Express scaffold with three focused TODOs in `src/auth.js`. Follow the workshop; the untouched scaffold deliberately rejects login and protected requests.

## Run locally

Use Node.js **24 LTS**, npm, and a terminal opened in this directory.

```sh
npm ci
npm run setup
npm start
```

PowerShell: use `npm.cmd` if `npm.ps1` is blocked. Open `http://127.0.0.1:3000/api/activities` to check the public route. Use `npm run dev` instead of `npm start` for automatic restarts.

`npm run setup` creates `.env` with a random signing secret and leaves an existing file untouched. `.env.example` documents the fields. This server binds to localhost and is a teaching example.

## Fictional accounts

| Username | Demo password | Server-side role |
| --- | --- | --- |
| `alice` | `StudentPass!23` | student |
| `morgan` | `OrganiserPass!23` | organiser |

These deliberately public demo passwords correspond to the bcrypt hashes in `src/users.js`. Do not reuse them for real accounts or deploy these accounts.

## API contract

| Method and path | Access | Success |
| --- | --- | --- |
| `GET /api/activities` | Public | Published sample activities |
| `POST /api/auth/login` | JSON username and password | `{ token, user }` |
| `GET /api/auth/me` | Bearer token | `{ user }` |
| `GET /api/staff/summary` | Organiser bearer token | `{ unpublishedActivities: 2 }` |

Safe user fields are `id`, `username`, and `role`. Login validation returns `400`; incorrect credentials and invalid/missing/expired tokens return `401`; insufficient permission returns `403`.

The intermediate TODO 2 guard returns `501` after password comparison works but before token issuance is implemented. It is a teaching checkpoint, not part of the completed API.\n
Use the workshop's Postman or curl instructions. `requests/` contains curl JSON bodies. `requests.http` offers optional editor-client examples; keep its token placeholder unchanged in commits.

## Checks

```sh
npm test
```

This runs the final behaviour contract: some tests intentionally fail until the TODOs are complete. For the original unmodified scaffold only, `npm run test:scaffold` checks that public data works and unfinished authentication denies access. Those scaffold tests are expected to fail once authentication is implemented.

## Limits

Users and activity data are fictional in-memory fixtures. There is no registration, persistence, frontend, refresh-token flow, revocation, or rate limiter. Clearing a client token does not invalidate copies. Follow the [SQL bridge](../workshop.md#bridge-to-mysql-and-react) and lecturer guidance before adapting the pattern to a real project.

Keep `.env`, dependency folders, and token values out of Git and evidence. The dependencies are reproducible through the committed lockfile.
