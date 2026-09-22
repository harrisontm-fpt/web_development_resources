# Verification notes

[Supplement guide](README.md) · [Lecturer guide](lecturer-guide.md)

Prepared and checked on **20 September 2026** using **Windows PowerShell** and **Node.js 24.21.0**.

## Reproducible environment

Both code folders use the same locked dependency versions:

| Dependency | Version |
| --- | --- |
| Express | 5.2.1 |
| bcrypt | 6.0.0 |
| jsonwebtoken | 9.0.3 |
| dotenv | 17.4.2 |
| Jest | 30.5.2 |
| Supertest | 7.2.2 |

Use `npm ci` with the committed lockfile. The test command enables Node's experimental VM-module support for Jest's ES-module execution; its experimental-feature warning is expected.

## Completed checks

- Reference solution: **37 tests passed**.
- Untouched starter: **4 scaffold checks passed**.
- An isolated copy of the starter, completed using only the three documented TODO replacements: **37 tests passed**.
- Rehearsed intermediate results: password comparison completed → `501`; token issuance completed → login `200` with protected access still `401`; token verification completed → protected access `200`.
- Installed the starter from its lockfile with `npm ci`.
- Confirmed setup generates a correctly formatted random secret and does not overwrite an existing `.env`.
- Started the real API from an isolated completed starter and checked the public route, Windows `curl.exe` login using the supplied JSON file, protected account access, and student denial on the organiser route.
- Checked local Markdown links and the 14-slide separator structure.
- Converted the lecture Markdown to HTML successfully, including code blocks and tables.
- Kept the original starter TODOs intact. Test secrets and preview files were confined to ignored local verification files.

## Remaining classroom checks

No browser was connected in the authoring environment, so a visual review of the rendered lecture and Mermaid diagram remains a lecturer preflight check. The diagram includes a text explanation for viewers without Mermaid support.

The HTTP flow was exercised with automated requests and Windows curl; Postman's interface steps and macOS/Linux shell examples were not manually exercised here. Rehearse with the classroom's API client before teaching.

These checks validate the teaching example, not a production authentication service or any student's final project.
