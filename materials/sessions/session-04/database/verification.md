# Verification notes

[Supplement guide](README.md) · [Lecturer guide](lecturer-guide.md)

Prepared and checked on **24 September 2026** using **Windows PowerShell**, **Node.js 24.21.0**, and **MariaDB 11.4.10**.

## Reproducible environment

Both code folders have lockfiles with the same dependency versions:

| Dependency | Version |
| --- | --- |
| Express | 5.2.1 |
| dotenv | 17.4.2 |
| mysql2 | 3.24.4 |
| Jest | 30.5.2 |
| Supertest | 7.3.0 |

Use `npm ci`. The test command enables Node's experimental VM-module support for Jest's ES modules; the accompanying experimental-feature warning is expected.

The authoring computer's installed Node was version 22, so tests used a checksum-verified portable Node 24 runtime. MariaDB was a checksum-verified portable Windows distribution running on a separate localhost port and temporary data directory. Existing MySQL services were not changed. This exercised MariaDB itself, not a MySQL substitute.

## Completed checks

- Solution: **40 contract/configuration tests passed**.
- Untouched starter: **4 scaffold checks passed**.
- An isolated starter completed using only the lecturer guide's three answer blocks: **40 tests passed**.
- Installed the starter using `npm ci` and its own lockfile.
- Real MariaDB integration suite passed for both the solution and completed starter.
- Integration checks covered an empty collection, repeated seeding, list ordering, POST with a generated ID and Location, direct SQL inspection, single-record GET, persistence after an actual API child-process restart, missing records, and invalid input.
- Stored an apostrophe and SQL-like text as ordinary values, and confirmed the table and record remained readable.
- Exercised the normal application account: SELECT and INSERT succeeded; DELETE was denied.
- Repeated the documented SOURCE schema/seed setup and confirmed two seeds plus an existing inserted record remained intact.
- Rehearsed the supplied Windows `curl.exe` requests with JSON files: valid POST returned 201, invalid POST returned 400.
- Confirmed the environment setup helper creates a configuration file and preserves an existing one.
- Checked JavaScript syntax, manifest/lockfile identities, local Markdown links, balanced code fences, and the 14-slide/14-note structure.
- Packaged the starter and checked archive contents against source files, including hidden example configuration files. The archive excludes actual environment files, dependencies, caches, test output, and the reference solution.

The handler tests use a database test double. Real MariaDB checks are a separate suite and are required to establish that the SQL works. Default starter contract tests deliberately include failures until students complete the tasks; scaffold checks apply only to the original starter.

## Remaining classroom checks

Windows MSI installation and macOS/Homebrew installation were documented from official sources but were **not performed interactively** in this environment. The Windows test database used the portable distribution instead. Rehearse installation on the classroom's operating systems before assigning preparation.

The HTTP flow was tested through automated requests and Windows curl. Postman's interface steps and macOS/Linux shell examples still need classroom rehearsal.

Review the rendered Markdown slides and Mermaid diagram in the viewer used for teaching. The slide structure was checked programmatically; a rendered visual review was not performed here. Every diagram has a text equivalent.

These checks validate the teaching example, not a production service or a student's final project.