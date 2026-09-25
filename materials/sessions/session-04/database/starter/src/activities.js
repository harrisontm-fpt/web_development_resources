// Complete the three TODOs here. The pool is supplied by app.js.
// Validation runs first; use the checked values in res.locals.
export function createActivityHandlers(pool) {
  return {
    async list(req, res) {
      // TODO 1: SELECT id, title, details ordered by id; await the query.
      // Return 200 and the rows array (including [] if no rows match).
      return res.status(501).json({ error: 'TODO 1: implement GET /api/activities.' });
    },

    async getOne(req, res) {
      const id = res.locals.activityId;
      // TODO 2: SELECT using WHERE id = ? and [id] as bound values.
      // Return 404 if no rows match; otherwise 200 with the first row.
      return res.status(501).json({ error: 'TODO 2: implement GET /api/activities/:id.' });
    },

    async create(req, res) {
      const { title, details } = res.locals.activity;
      // TODO 3: INSERT with two placeholders and [title, details].
      // Use result.insertId to build the new activity.
      // Return 201 with the activity and Location: /api/activities/<id>.
      return res.status(501).json({ error: 'TODO 3: implement POST /api/activities.' });
    },
  };
}