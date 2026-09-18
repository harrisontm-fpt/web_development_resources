# Session 13 — Release readiness and handover

[Session index](../README.md) · [Student workshop](workshop.md)

**Week 7 · Lecture: 60 minutes**

## Learning goals

Distinguish code completion from release readiness, audit the deployed application, and prepare reproducible handover evidence.

## Teaching sequence

| Minutes | Focus |
| --- | --- |
| 0–10 | Retrieve required features, tests, and current deployment status |
| 10–25 | Build/runtime configuration and public access |
| 25–40 | Security, quality checks, and defect priorities |
| 40–50 | README, release identity, and handover |
| 50–60 | Walk through the audit and checkpoint expectations |

## A release is a known working version

A release candidate is a version you expect to deliver after remaining checks and fixes. Record its commit identifier so test results, screenshots, and deployment refer to the same code.

Development and production differ: the frontend may be built into static assets; the API runs as a service; the database must retain data. Environment variables, origin/routing, HTTPS, process startup, and database network permissions must match the deployed arrangement. The development proxy from session 8 is not automatically part of production.

Use the institution-supported deployment route already established in session 6. Rehearse a small deployment update and verify the actual public URL. Do not switch hosting approaches late without a concrete reason and a recovery plan.

## Trace public access

Open the application in a fresh browser context and complete an essential journey. Check a nested route by direct URL and reload. A single-page app can navigate successfully through links but fail on direct requests if the host's route handling is wrong.

Verify frontend-to-API calls, persistence, and appropriate access control. Configuration belongs to the correct environment; browser-delivered variables are visible to users and must not contain database passwords or private API secrets.

Keep diagnosis possible: capture useful server-side logs and a reproducible request, but return appropriate user-facing errors without leaking internals. Treat failed authentication, invalid input, and unexpected server failures as different cases.

## Audit quality against requirements

Run the integration and E2E suites against their intended environments. Save results with the build/date and inspect failures. Run Lighthouse for relevant deployed pages and inspect the findings. Validate rendered HTML and applicable CSS, recording fixes or explanations for remaining findings. Combine automated results with mobile, keyboard, and task-based checks.

A high score is not the entire assessment. A page can score well but fail its main user journey. Do not spend hours pursuing a cosmetic score improvement while a required feature is broken.

## Triage remaining work

| Priority | Example | Response |
| --- | --- | --- |
| Delivery blocker | Public API unavailable; required journey cannot finish | Resolve first and verify the full path |
| Essential-task defect | Error loses user input; unreadable mobile form | Fix before optional polish |
| Minor improvement | Inconsistent nonessential spacing | Address if time remains |

Freeze new optional feature work. Completing agreed requirements and correcting defects continues. If a client minimum is at risk, discuss the impact and agreement explicitly; silently deleting it from the backlog does not resolve the requirement.

## Document for the next person

The README should identify purpose, audience, value, features, public URL, local setup, database preparation, environment-variable names, test commands, and instructions to locate all major features. Link design, test, feedback, contribution, and AI evidence.

A GitHub release names the submitted version and includes release notes. Verify the deployed code corresponds to it. Following the final presentation, teams have 48 hours to fix priority findings, retest, publish the final release, and submit its link.

**Check understanding:** Can local tests alone establish public deployment works? No. Does a feature freeze forbid fixing a required journey? No. What proves setup instructions are usable? A different person following them.

## Preparation and reading

Lecturer: use the verified hosting setup sheet and a release with one realistic configuration defect to discuss.

- [WSK deployment](../../../reference_materials/WSK-main/project/cloud-deployment.md)
- [Release audit and delivery checklist](../../reviews_and_delivery.md)
- [Final assignment](../../../syllabus/final_assignment.md)
