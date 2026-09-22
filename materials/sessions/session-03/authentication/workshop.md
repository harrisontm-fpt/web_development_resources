# Workshop — Log in and request protected data

[Slides](lecture.md) · [Supplement guide](README.md) · [Reference solution](solution/README.md)

**Optional · 60 minutes · Ungraded · Basic JavaScript assumed**

By the end, you should be able to explain and run this sequence:

**Credentials → password check → access token → verified request → protected data.**

Use fictional accounts and localhost throughout. Work individually or in pairs, changing who types halfway through. The organiser route is an optional extension.

## Before class

Install **Node.js 24 LTS** and an API client such as the Postman desktop app. Bring an editor. No MySQL server, React app, or external account is required to run the API. Download dependencies before class if classroom network access is unreliable.

The starter uses JavaScript ES modules (`import`/`export`). You will edit only three marked places in `src/auth.js`. The server, routes, input checks, and demo users are supplied.

## 1. Start the scaffold (0–10 minutes)

From the repository root:

```sh
cd materials/sessions/session-03/authentication/starter
node --version
npm ci
npm run setup
npm start
```

On PowerShell, use `npm.cmd` in place of `npm` if execution policy blocks the PowerShell wrapper. The expected Node version starts with `v24.`.

`npm run setup` creates `.env` with a randomly generated signing secret. It leaves an existing file untouched. The placeholder in `.env.example` is deliberately not usable.

Expected terminal message:

```text
Teaching API ready at http://127.0.0.1:3000
```

Keep that terminal running; use another terminal for commands. Stop the server with **Ctrl+C**, restart after changes, or use `npm run dev` to restart automatically.

### Find the moving parts

| File | Purpose |
| --- | --- |
| `src/server.js` | Loads local settings and listens on localhost |
| `src/app.js` | Connects request paths to handlers |
| `src/users.js` | Fictional users with stored password hashes |
| `src/auth.js` | Your three authentication tasks and supplied role check |
| `.env` | Local signing secret, expiry, and port; never commit |
| `requests.http` | Optional request examples for an editor HTTP client |

`req.body` contains parsed JSON. `res.status(...).json(...)` sends an HTTP response. `return` stops this handler. In middleware, `next()` continues to the next handler. An `async` function can `await` a password comparison before continuing.

## 2. Inspect a public request (10–20 minutes)

In Postman, create a **local, unsaved request**:

1. Choose **GET**.
2. Enter `http://127.0.0.1:3000/api/activities`.
3. Choose **No Auth** in the Authorization tab and send.

Expect `200` and:

```json
[{"id":1,"title":"Campus coding club","published":true}]
```

Now request `GET http://127.0.0.1:3000/api/auth/me` with No Auth.

Expect `401`:

```json
{"error":"A valid bearer token is required."}
```

**Explain:** Why can you see activities but not account details?

Open `src/app.js`. Compare the two routes: `/me` runs `requireAuth` before the response handler.

### Prepare the login request

Create a new local Postman request:

- Method: **POST**
- URL: `http://127.0.0.1:3000/api/auth/login`
- Authorization: **No Auth**
- Body: **raw → JSON**
- Confirm header: `Content-Type: application/json`

```json
{"username":"alice","password":"StudentPass!23"}
```

The untouched starter returns `401` even with these correct details. This is intentional: TODO 1 has not been completed.

## 3. Compare a password and issue a token (20–35 minutes)

### TODO 1 — Password comparison

In `src/auth.js`, find:

```js
const passwordMatches = false; // TODO 1
```

Replace `false` with an awaited call to `bcrypt.compare`. Pass the submitted `password` and the supplied `comparisonHash`.

Keep the following check:

```js
if (!user || !passwordMatches) {
  return res.status(401).json({ error: 'Invalid username or password.' });
}
```

The supplied fallback hash makes an unknown username follow a similar comparison path. It does not allow that unknown user to log in.

Restart and try:

- Wrong password → `401`.
- Unknown username → the same `401` message.
- Alice's correct details → `501` with `Complete TODO 2 to issue an access token.`.

That `501` is a temporary teaching response confirming you reached the next TODO.

<details>
<summary>Hint / check your expression</summary>

```js
const passwordMatches = await bcrypt.compare(password, comparisonHash);
```

Do not hash the submitted password and compare hash strings: bcrypt uses a salt, so independently produced hashes differ.

</details>

### TODO 2 — Token issuance

Find:

```js
const token = null; // TODO 2
```

Replace `null` with `jwt.sign`. Its arguments should be:

1. An empty payload object, `{}`.
2. The supplied `jwtSecret`.
3. Options: `algorithm: 'HS256'`, `subject: String(user.id)`, `expiresIn: tokenTtl`.

Keep the temporary `if (token === null)` guard; it will no longer run once you create a token.

<details>
<summary>Hint / check your expression</summary>

```js
const token = jwt.sign({}, jwtSecret, {
  algorithm: 'HS256',
  subject: String(user.id),
  expiresIn: tokenTtl,
});
```

</details>

Restart and send Alice's correct login request again. Expect `200` and this shape:

```json
{
  "token": "<generated token; do not copy into your evidence>",
  "user": {"id":1,"username":"alice","role":"student"}
}
```

The password and password hash must be absent. The user ID is carried in the token's `sub` claim. The library adds issue and expiry timestamps. Tokens expire after 15 minutes by default.

**Explain:** Why is the signing secret kept on the server?

## 4. Verify before allowing access (35–50 minutes)

### TODO 3 — Token verification

In `createRequireAuth`, the code already reads the bearer header. Inside its `try` block, find:

```js
throw new Error('TODO 3: verify the token before allowing access.');
```

Replace that line with an assignment to `claims` using:

```js
claims = jwt.verify(match[1], jwtSecret, { algorithms: ['HS256'] });
```

Read the supplied remainder of the function:

1. Invalid signature or expired token → the `catch` returns `401`.
2. Required claims and a matching server-side user must exist.
3. The server puts safe user details on `req.user`.
4. `next()` allows the route handler to return those details.

Do not replace verification with `jwt.decode`, remove the checks, or call `next()` before them.

### Send the token

Restart, then log in again. In your **GET /api/auth/me** request:

1. Select **Authorization → Bearer Token**.
2. Paste only the login response's token string.
3. Send. Postman adds `Authorization: Bearer <token>` for you.

Expect `200`:

```json
{"user":{"id":1,"username":"alice","role":"student"}}
```

Keep the token in your local request only. Do not save or export a request containing it to a shared collection. Select **No Auth** and retry: expect `401`.

## 5. Check failure cases and explain (50–60 minutes)

Record status codes and brief observations, without credentials or token values.

| Request | Expected result |
| --- | --- |
| Public activities, no token | `200`, published sample |
| Login with missing password | `400` |
| Login with incorrect password | `401`, generic login error |
| Login with unknown username | Same `401` error |
| Correct login | `200`, token and safe user details |
| Account request without bearer header | `401` |
| Account request with `Bearer not-a-jwt` | `401` |
| Account request with valid token | `200`, current user |
| Account request with altered token | `401` |

For the alteration check, change the **first character of the signature segment** (the part after the second dot) to a different letter. Keep the rest intact. Send, observe `401`, then restore the original token. Avoid changing only the final base64url character, which can sometimes decode to the same bytes.

Run the supplied behavioural checks from a second terminal:

```sh
npm test
```

Before the TODOs are finished, some tests intentionally fail. After all three tasks, the complete suite should pass, including the supplied role checks. Test authoring is a later course topic; today use the failures to locate a problem.

### Exit evidence

- Your three completed TODOs.
- The request/result table, with no live credentials, token values, or `.env` contents.
- Two or three sentences explaining identity, token tampering, and permissions.
- One access rule your own project's backend must enforce.

Inspect `git status` and the staged diff before committing. Keep generated files and secrets out of the change. The original session 3 requirements tasks remain separate.

## Optional extension — Permissions, expiry, and logout

These activities are follow-up, not extra work squeezed into the core hour.

### Observe authorisation

Use Alice's token for `GET /api/staff/summary`: expect `403`.

Log in with the second fictional account:

```json
{"username":"morgan","password":"OrganiserPass!23"}
```

Use Morgan's token on the same route: expect `200` and `{"unpublishedActivities":2}`.

Read `requireOrganiser` and the route's middleware order. Adding `"role":"organiser"` to Alice's login body does not change Alice's server-side role.

**Transfer:** A booking applicant may own one request but not another. A role alone does not establish ownership; each project needs its own backend checks.

### Observe expiry

1. Stop the API, change `JWT_EXPIRES_IN=15m` to `JWT_EXPIRES_IN=5s` in `.env`, and restart.
2. Log in to obtain a **new** token.
3. Wait more than five seconds, then request `/api/auth/me`: expect `401`.
4. Restore `15m` and restart.

Changing the setting does not shorten a previously issued token's lifetime. The automated expiry test creates an already-expired token so it does not need to wait.

### Observe the limit of client-side logout

With a fresh 15-minute token, request `/me`, then temporarily retain that token locally and select No Auth. The request now fails. Reapply the retained token: it succeeds until expiry.

Removing a token stops that client sending it; it does not invalidate copies. This example has no logout/revocation endpoint. Projects that require immediate invalidation need additional server-side state and a deliberate session design.

## Equivalent curl requests

Run commands from `starter/` or `solution/`. The JSON files contain fictional demo credentials only.

**Windows PowerShell** uses `curl.exe` to avoid the Windows PowerShell `curl` alias:

```powershell
curl.exe -i http://127.0.0.1:3000/api/activities
curl.exe -i -H "Content-Type: application/json" --data-binary "@requests/login-alice.json" http://127.0.0.1:3000/api/auth/login
$token = Read-Host "Paste only the demo token"
curl.exe -i -H "Authorization: Bearer $token" http://127.0.0.1:3000/api/auth/me
Remove-Variable token
```

**macOS/Linux**:

```sh
curl -i http://127.0.0.1:3000/api/activities
curl -i -H "Content-Type: application/json" --data-binary "@requests/login-alice.json" http://127.0.0.1:3000/api/auth/login
read -r token
# Paste the demo token at the input prompt and press Enter.
curl -i -H "Authorization: Bearer $token" http://127.0.0.1:3000/api/auth/me
unset token
```

Change the login filename to `login-morgan.json` or `login-invalid.json` for organiser and wrong-password checks. Replace `/api/auth/me` with `/api/staff/summary` for the permission check. Do not record terminal output containing tokens as evidence.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| `npm` not found or engine warning | Install Node 24 LTS; reopen the terminal and check `node --version` |
| PowerShell blocks `npm.ps1` | Use `npm.cmd ci`, `npm.cmd run setup`, and `npm.cmd start` |
| Cannot install dependencies | Check network access and the error; ask for the rehearsed class environment |
| Invalid/missing signing secret | Run `npm run setup`; if `.env` already exists, check its format without sharing its value |
| Port already in use | Stop the other starter/solution server or change `PORT`; update request URLs |
| `404` or `Cannot GET` | Check method and full path; login requires POST |
| `400` from login | Select raw JSON, set its Content-Type, and supply string fields |
| Correct credentials return `401` | Complete TODO 1; check spelling and restart |
| Correct credentials return `501` | Complete TODO 2 |
| A fresh token still returns `401` | Complete TODO 3; remove quotes/duplicate Bearer prefix; use the same running API |
| Token worked before but fails now | It may have expired or come from another signing secret; log in again |
| Alice receives `403` on staff summary | Expected: student users lack organiser permission |

## Bridge to MySQL and React

Keep the route contract when replacing the teaching storage later.

**Illustrative pattern only — not runnable in this starter:**

```js
// pool is your project's configured mysql2/promise connection pool.
export async function findUserByUsername(username) {
  const [rows] = await pool.execute(
    'SELECT id, username, password_hash AS passwordHash, role FROM users WHERE username = ?',
    [username],
  );
  return rows[0];
}
```

Add an equivalent parameterised ID lookup. These database lookups return promises: update **both login and authentication middleware** to await them, and forward database failures to error handling as server errors. Do not report a database outage as incorrect credentials. Retain a separate fixed dummy hash for unknown-user comparisons instead of querying a demo account as the fallback.

Account creation must hash passwords before storing them, enforce unique usernames, and assign permitted roles server-side. It is not implemented in this starter.

Later, React can POST credentials and send the returned token in a fetch header. Browser persistence, cookie/session alternatives, cross-origin requests, and real logout require separate design work. Start with the unit's later React/API sessions and the [WSK authentication reference](../../../../reference_materials/WSK-main/Week3/06-auth.md).

See [mysql2's prepared-statement documentation](https://sidorares.github.io/node-mysql2/docs#using-prepared-statements) for the SQL pattern.
