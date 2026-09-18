# Session 06 — Backend, data, and deployment foundations

[Session index](../README.md) · [Student workshop](workshop.md)

**Week 3 · Lecture: 60 minutes · Applies WSK Express and SQL learning**

## Learning goals

Trace an API request through SQL and back, validate inputs, separate server configuration from source, and demonstrate one deployable service.

## Teaching sequence

| Minutes | Focus |
| --- | --- |
| 0–10 | Retrieve request/response and relational-data knowledge |
| 10–25 | API contract, SQL-backed route, and response shape |
| 25–40 | Validation, parameterised SQL, and error handling |
| 40–50 | Local versus deployed configuration |
| 50–60 | Trace a failure and explain workshop expectations |

## A small consistent example

The campus demonstration stores activities with id, title, and details. For this read-only example:

~~~sql
CREATE TABLE activities (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(120) NOT NULL,
  details TEXT NOT NULL
);
INSERT INTO activities (title, details)
VALUES ('Board games', 'Meet in Room A'),
       ('Drawing club', 'Bring a sketchbook');
~~~

Run setup only in your own empty development/demo database, not against a shared existing table. The example supports **GET /api/activities** and optional **?title=Board** filtering. An empty result is a successful empty collection.

Use the WSK Node ES-module environment with express, mysql2, and dotenv. The following files form the read-only teaching example; retain your team's existing structure when adapting it.

**src/db.js**

~~~js
import 'dotenv/config';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5,
});
export default pool;
~~~

**src/app.js**

~~~js
import express from 'express';
import pool from './db.js';

const app = express();
app.use(express.json());

app.get('/api/activities', async (req, res, next) => {
  const title = req.query.title ?? '';
  if (typeof title !== 'string' || title.length > 120) {
    return res.status(400).json({error: 'Title must be at most 120 characters.'});
  }
  try {
    const [rows] = await pool.execute(
      'SELECT id, title, details FROM activities WHERE LOCATE(?, title) > 0 ORDER BY id',
      [title],
    );
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  // In a real service, log diagnostic detail securely on the server.
  res.status(500).json({error: 'Unable to load activities.'});
});
export default app;
~~~

**src/server.js**

~~~js
import app from './app.js';
app.listen(Number(process.env.PORT || 3000));
~~~

The empty string passed to LOCATE matches all titles; a nonmatching title returns an empty array. The database's collation influences case sensitivity. Keep the example's contract explicit instead of assuming all databases compare strings identically.

## Why the boundaries matter

The browser sends HTTP, Express validates it, and SQL returns records. Prepared parameters bind input as values; do not concatenate user values into query strings. Validation and parameterisation solve different problems: the former checks expected shape/rules, the latter separates values from SQL structure.

Use 400 for the invalid title shape/length in this example and a generic 500 response for unexpected failures. Do not reveal credentials or database internals to visitors. Explicit try/catch with next forwards asynchronous failures to the error handler; see [Express error handling](https://expressjs.com/en/guide/error-handling/).

Exporting app separately from app.listen lets tests exercise the application without your normal server entry point starting automatically.

## Deployment is a configuration exercise too

Record required variables in a safe .env.example; actual values stay outside Git. The lecturer supplies the institution's verified deployment instructions. Confirm runtime, startup command, reachable API address, database access, and HTTPS. A frontend host alone does not necessarily provide the required Node service and persistent SQL database.

For browser access, agree either a same-origin/proxy path or an explicitly configured API origin. Browser CORS policy is different from an API working in a command-line client; do not “fix” it by disabling browser protections. We connect React in session 8.

**Check understanding:** Why can [] be 200? The request succeeded with no matches. Why does success locally not prove deployment works? Configuration, access, process lifecycle, and URLs differ.

## Preparation and reading

Lecturer: rehearse this route and deployment in the class environment; confirm the example's dependencies match WSK.

- [WSK database connection and prepared statements](../../../reference_materials/WSK-main/Week3/05-database.md)
- [WSK validation](../../../reference_materials/WSK-main/Week3/07-validation.md)
- [WSK deployment](../../../reference_materials/WSK-main/project/cloud-deployment.md)
