// The pool is supplied by app.js. Validation runs before these handlers.
export function createActivityHandlers(pool) {
  return {
    async list(req, res) {
      const [rows] = await pool.execute(
        'SELECT id, title, details FROM activities ORDER BY id',
      );
      return res.status(200).json(rows);
    },

    async getOne(req, res) {
      const id = res.locals.activityId;
      const [rows] = await pool.execute(
        'SELECT id, title, details FROM activities WHERE id = ?', [id],
      );
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Activity not found.' });
      }
      return res.status(200).json(rows[0]);
    },

    async create(req, res) {
      const { title, details } = res.locals.activity;
      const [result] = await pool.execute(
        'INSERT INTO activities (title, details) VALUES (?, ?)', [title, details],
      );
      const activity = { id: result.insertId, title, details };
      return res.location(`/api/activities/${activity.id}`).status(201).json(activity);
    },
  };
}
