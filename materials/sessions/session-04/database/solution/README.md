# MariaDB reference solution

All three handlers in `src/activities.js` are complete. Use this folder for lecturer demonstrations or to compare your finished work.

In the full repository: [setup guide](../setup.md) · [workshop](../workshop.md) · [slides](../lecture.md) · [lecturer guide](../lecturer-guide.md). These companion documents are outside the standalone starter ZIP; the essentials below let the extracted folder run independently.

## Prerequisites

Use **Node.js 24**, npm, and a running **local MariaDB server**, plus Postman or curl. This is a separate app from session 3; stop other APIs using port 3000.

Install MariaDB using the [official Windows guide](https://mariadb.com/docs/server/server-management/install-and-upgrade-mariadb/installing-mariadb/binary-packages/installing-mariadb-msi-packages-on-windows) or [macOS guide](https://mariadb.com/docs/server/server-management/install-and-upgrade-mariadb/installing-mariadb/binary-packages/installing-mariadb-on-macos-using-homebrew). Installation is pre-class preparation.

## Database setup

Connect to your local MariaDB as administrator. On Windows use the installed MariaDB command prompt and `mariadb -u root -p`. On macOS use `mariadb`, or `sudo mysql -u root` if administrator access is needed.

Run the following SQL once, replacing the password placeholder. Do not use an existing project database:

```sql
CREATE DATABASE IF NOT EXISTS session04_activities
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE session04_activities;
```

Run `sql/schema.sql`, then `sql/seed.sql` in this database. In the MariaDB client, use `SOURCE /absolute/path/to/solution/sql/schema.sql;` and the equivalent seed path, on separate lines. Use forward slashes on Windows. A GUI can execute the two files instead. Both scripts preserve existing rows when rerun.

```sql
CREATE USER IF NOT EXISTS 'session04_app'@'127.0.0.1'
  IDENTIFIED BY 'replace-with-your-local-database-password';
GRANT SELECT, INSERT ON session04_activities.activities
  TO 'session04_app'@'127.0.0.1';
SELECT id, title, details FROM activities ORDER BY id;
```

On a fresh database expect Board games and Drawing club. An existing account keeps its current password. Test the application account with `mariadb -h 127.0.0.1 -P 3306 -u session04_app -p session04_activities`.

## Start the API

From this folder:

```sh
npm ci
npm run setup
```

Edit `.env`: set DB_PASSWORD to the application account password inside the supplied quotes; match DB_PORT to MariaDB. Keep the other defaults for this setup. Existing `.env` files are preserved by the setup script.

```sh
npm run db:check
npm start
```

On PowerShell use `npm.cmd` if `npm.ps1` is blocked. Use `npm run dev` for automatic restarts. Expect the API at `http://127.0.0.1:3000`.

## API contract

| Request | Completed response |
| --- | --- |
| GET /api/activities | 200, array ordered by ID; [] when empty |
| GET /api/activities/:id | 200, one activity; 404 if absent; 400 for invalid ID |
| POST /api/activities | 201, generated ID/title/details and Location header |

POST JSON: `{"title":"Campus coding club","details":"Bring a laptop to Room B."}`

Both strings must be nonblank after trimming. Title limit: 120 characters; details limit: 2,000. Supplied validation returns 400 for bad input and malformed JSON; the body size limit returns 413. Database failures return generic 500 responses.

For curl examples use `requests/create-activity.json` and `requests/invalid-activity.json`. On Windows use `curl.exe`:

```sh
curl -i http://127.0.0.1:3000/api/activities
curl -i -X POST http://127.0.0.1:3000/api/activities -H "Content-Type: application/json" --data-binary "@requests/create-activity.json"
```

GET the returned ID. Stop Node with Ctrl+C, restart it, and GET that same ID again to demonstrate persistence. MariaDB must remain running.

## Checks

`npm test` runs the completed behaviour contract without a real database. All contract tests should pass.

`npm run test:db` exercises real MariaDB and an actual API process restart. It requires the lecturer guide's separate test database and `.env.test`. It deletes test rows; it never uses the normal exercise database.

## Troubleshooting and limits

Check MariaDB is running if the connection is refused. Check DB_USER/DB_PASSWORD and the TCP host if access is denied. Missing table errors mean schema setup ran in the wrong database or not at all. Port 3000 conflicts mean another API is running. A 500 response means a database operation failed.

This localhost example has public GET and POST routes and no frontend or authentication. Keep `.env`, `.env.test`, dependencies, and credentials out of Git. Seed IDs are 1 and 2, but created IDs may have gaps and should always come from the POST response.