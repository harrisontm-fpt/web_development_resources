# Before class — Set up local MariaDB

[Supplement guide](README.md) · [Workshop](workshop.md) · [Lecturer guide](lecturer-guide.md)

Allow **30–45 minutes before class**, plus download time. Bring Node.js 24, an editor, and Postman. Basic SQL has already been taught; the scripts below supply the practice schema.

There are two separate programs: MariaDB stores records; Node/Express handles HTTP requests. Both must be running. Installing the npm package `mysql2` installs a driver, not the MariaDB server.

Use a dedicated local database for this activity. If MySQL or MariaDB already uses port 3306, retain that installation and arrange a separate MariaDB instance on 3307 with your lecturer; match every client command and `DB_PORT` to the chosen port. Do not replace or upgrade an existing database just for this exercise.

## 1. Install and start MariaDB

### Windows

1. Download a stable MariaDB Community Server x64 MSI from [MariaDB downloads](https://mariadb.org/download/). Avoid preview releases.
2. Install the server, client tools, and database instance. Set and retain a local administrator/root password; leave remote root access and anonymous accounts disabled.
3. Install as the `MariaDB` Windows service. Enable networking, normally on port 3306. Complete installation.
4. Open the MariaDB **Command Prompt** entry in the Start menu. It supplies the client tools on PATH. Check:

```text
mariadb --version
mariadb --host=127.0.0.1 --port=3306 --user=root --password
```

Enter the administrator password at the prompt. Some installations provide the client as `mysql`; that executable can connect to MariaDB too. Verify the actual server using the SQL below.

If the service is stopped, open Windows **Services**, find MariaDB, and start it. For a local-only instance, use the installer’s **my.ini** shortcut and ensure `bind-address=127.0.0.1` is under `[mysqld]`, then restart that service. Keep any other existing settings.

Installation reference: [MariaDB Windows MSI guide](https://mariadb.com/docs/server/server-management/install-and-upgrade-mariadb/installing-mariadb/binary-packages/installing-mariadb-msi-packages-on-windows).

### macOS

Install [Homebrew](https://brew.sh/) if needed, following its instructions. In Terminal:

```sh
brew install mariadb
brew services start mariadb
brew services list
mariadb
```

The final command normally connects through a local socket using your macOS account. If it lacks administrator privileges, use `sudo mysql -u root` for database setup. Do not change root authentication merely to let Node connect; create the application account below.

For a local-only instance, check `bind-address=127.0.0.1` under `[mysqld]` in `/opt/homebrew/etc/my.cnf` (Apple Silicon) or `/usr/local/etc/my.cnf` (Intel), then run `brew services restart mariadb`. Ask your lecturer before editing an existing shared installation.

Installation reference: [MariaDB macOS/Homebrew guide](https://mariadb.com/docs/server/server-management/install-and-upgrade-mariadb/installing-mariadb/binary-packages/installing-mariadb-on-macos-using-homebrew).

### Linux reference

On Ubuntu, follow the [official installation guide](https://mariadb.com/docs/server/mariadb-quickstart-guides/installing-mariadb-server-guide): install the `mariadb-server` package, start its service, and use `sudo mariadb` for local administration. Continue with the same SQL below. Other distributions have different package/service commands.

### Check the server

At the MariaDB SQL prompt, run:

```sql
SELECT VERSION();
```

The result should contain `MariaDB`. The client version alone does not establish which database server you reached.

## 2. Create and seed the exercise database

Get the [starter ZIP](starter.zip) and extract it, or use the repository's `materials/sessions/session-04/database/starter` folder. Work in that folder throughout.

In the administrator SQL session:

```sql
CREATE DATABASE IF NOT EXISTS session04_activities
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE session04_activities;
```

Import the supplied SQL using the MariaDB client's `SOURCE` command. Replace the example path with the actual extracted folder. Use forward slashes on Windows. Paste each command on one line; the remainder of the line after SOURCE is the filename, so spaces in the path do not need shell quoting.

Windows example:

```text
SOURCE C:/Users/YourName/Downloads/starter/sql/schema.sql;
SOURCE C:/Users/YourName/Downloads/starter/sql/seed.sql;
```

macOS example:

```text
SOURCE /Users/yourname/Downloads/starter/sql/schema.sql;
SOURCE /Users/yourname/Downloads/starter/sql/seed.sql;
```

`SOURCE` runs in the MariaDB client, **not** PowerShell or your regular shell. If using a database GUI instead, select `session04_activities` and execute the contents of each SQL file in order.

Verify:

```sql
SELECT id, title, details FROM activities ORDER BY id;
```

On a fresh database expect IDs 1 and 2: Board games and Drawing club. Re-running the scripts preserves existing records and does not duplicate these seeds. They do not repair an incompatible table from another exercise; use this dedicated database.

## 3. Create the application's database account

Still as the administrator, replace the placeholder password below with your own local exercise password. Use that same value later in `.env`. A password manager's alphanumeric generated value avoids SQL quoting difficulties.

```sql
CREATE USER IF NOT EXISTS 'session04_app'@'127.0.0.1'
  IDENTIFIED BY 'replace-with-your-local-database-password';
GRANT SELECT, INSERT ON session04_activities.activities
  TO 'session04_app'@'127.0.0.1';
```

Run account creation once. If that account already exists, `IF NOT EXISTS` keeps its existing password; use the password you previously set. Do not paste a real password into shared evidence.

The application account can read and insert activities. It cannot create tables, change existing rows, or remove them. Keep administrator credentials out of the application configuration.

Exit the SQL session with `exit;`. Test the account over TCP from the MariaDB command prompt or Terminal:

```text
mariadb --host=127.0.0.1 --port=3306 --user=session04_app --password session04_activities
```

Enter the application password, then run:

```sql
SELECT id, title, details FROM activities ORDER BY id;
SHOW GRANTS;
exit;
```

Always use `127.0.0.1` here and in Node configuration. In particular, `localhost` on macOS may use a Unix socket and select a different database account.

## 4. Configure and check Node

In an editor terminal opened in the starter folder:

```sh
node --version
npm ci
npm run setup
```

Expect a Node version starting with `v24.`. On PowerShell use `npm.cmd` if execution policy blocks `npm.ps1`.

Open the newly created `.env`. Set `DB_PASSWORD` to the application account password, inside the supplied double quotes. Retain `DB_HOST=127.0.0.1`, `DB_NAME=session04_activities`, and `DB_USER=session04_app`. Match `DB_PORT` to MariaDB. `PORT=3000` is the HTTP server port; it is a different setting.

`npm run setup` copies `.env.example` only if `.env` does not exist. It does not install MariaDB, create accounts, or overwrite configuration.

```sh
npm run db:check
npm start
```

Expect:

```text
Database connection and activities table OK. Server: <your MariaDB version>
Teaching API ready at http://127.0.0.1:3000
```

The server checks its database connection before listening. In the untouched starter, visiting `http://127.0.0.1:3000/api/activities` returns `501` with a TODO message. This is the correct starting point.

## Ready-for-class checklist

- [ ] Node 24 and dependencies installed.
- [ ] MariaDB running; server version confirmed.
- [ ] Two seed activities visible through the application account.
- [ ] Local `.env` configured and `npm run db:check` succeeds.
- [ ] Starter starts and returns the TODO 1 response.
- [ ] Postman and editor ready; `.env` excluded from Git.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| `mariadb` command not found | Use MariaDB's Windows Command Prompt, its `mysql` client alias, or the installed client's full path. On macOS verify Homebrew PATH. |
| `ECONNREFUSED` | Start MariaDB; confirm host and DB_PORT. The Node server cannot start MariaDB for you. |
| `ER_ACCESS_DENIED_ERROR` | Match application username, password, and TCP host. Check the account with the command-line client. |
| `ER_BAD_DB_ERROR` | Create/select `session04_activities`; check DB_NAME. |
| `ER_NO_SUCH_TABLE` / `ER_TABLEACCESS_DENIED_ERROR` | Run schema setup in the correct database and grant SELECT/INSERT on that table. |
| Password placeholder rejected | Edit `.env`; setup intentionally creates an unusable placeholder. |
| `EADDRINUSE` | Stop the session 3 API or another API on port 3000; alternatively change PORT and all request URLs. |
| `SOURCE` cannot open file | Check the absolute extracted path and use forward slashes. Run SOURCE inside the SQL client. |
| GET returns `501` | Database setup succeeded; implement the indicated student TODO. |
| POST returns `400` | Use raw JSON, Content-Type application/json, and nonblank title/details strings. |
| Request returns `500` after startup | Run `npm run db:check` in another terminal; check the query locally. Do not send SQL errors or passwords to clients. |

If blocked before class, bring the exact error code and ask your lecturer for setup help. Working from the solution still requires a working MariaDB instance.