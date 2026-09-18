# Session 02 workshop — Make and review a change

[Lecture](lecture.md) · [Session index](../README.md)

**60-minute workshop + 60-minute project block · Ungraded setup check**

## Before you start

Use a disposable practice repository shared by your team. Git must be installed and all members must have access. Use your normal authenticated tools; do not paste passwords or tokens into notes. Start with a clean working tree.

## Step 1 — Follow the demonstration (0–10 minutes)

Watch the lecturer take one README change from branch to review. Identify where the change is local and when teammates can see it. Copy the [PR description template](../../project_management.md) into a shared note.

## Step 2 — Each person changes and reviews (10–30 minutes)

1. Clone the practice repository, or fetch its current main branch.
2. Create a uniquely named branch such as docs/anna-setup.
3. Add two useful lines to an assigned README section.
4. Inspect the diff, stage only your intended change, and commit.
5. Push and open a pull request explaining purpose and checking.
6. Review another member's PR. Check the diff and ask or answer one substantive question.
7. Merge reviewed changes sequentially and update your local main branch.

Everyone must act as author and reviewer. Record PR links rather than screenshots of every command.

## Step 3 — Deliberately resolve a conflict (30–45 minutes)

Do this only in the practice repository.

1. Agree one line in a small text file. Begin two new branches from the same main commit.
2. Two members change that exact line differently, commit, and push.
3. Merge the first branch through the normal review process.
4. On the second branch, fetch origin and merge origin/main. Git should report the conflict.
5. Together, read both versions and write the intended combined line. Remove conflict markers, save, and inspect the diff.
6. Stage the resolved file and complete the merge with a commit if Git requests one. Push and review the resolved PR.

The third member observes, explains the resolution, and then practises the conflicting-branch role with a fresh pair of branches during the project block. All three members must resolve a staged conflict.

## Step 4 — Explain your result (45–60 minutes)

Show a reviewed PR and a conflict resolution. Each member answers:

- What did your branch change?
- What did the review check?
- Why is the resolved content correct?
- Which operation made your work available to others?

Write a short team rule for branch size, review, and keeping main usable.

## Project block (60 minutes)

Spend 5 minutes planning, 45 working, and 10 recording progress. Finish individual conflict practice as needed. Set up the real project repository, README, access, ignore rules, and contribution/AI record locations. Link the board and team agreement.

## Evidence to keep

- [ ] One authored and one reviewed PR per member.
- [ ] Each member has explained and practised a conflict resolution.
- [ ] Real repository and board are accessible to all members and the lecturer.
- [ ] Initial README identifies the project and team.
- [ ] Team workflow and evidence locations are recorded.

**If blocked:** use git status and read the exact message. Do not overwrite unfamiliar changes. Ask the lecturer to inspect the state.
**If finished early:** have a teammate follow your README and record one missing instruction.
**Before next session:** read the real brief and bring questions about users, requirements, and scope.
