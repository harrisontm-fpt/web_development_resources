export function validateId(req, res, next) {
  const value = req.params.id;
  if (!/^[1-9]\d*$/.test(value) || Number(value) > 2147483647) {
    return res.status(400).json({ error: 'Activity ID must be a positive integer up to 2147483647.' });
  }
  res.locals.activityId = Number(value);
  next();
}

export function validateActivity(req, res, next) {
  const body = req.body;
  if (!body || Array.isArray(body) || typeof body.title !== 'string' || typeof body.details !== 'string') {
    return res.status(400).json({ error: 'Provide title and details as JSON strings.' });
  }
  const title = body.title.trim();
  const details = body.details.trim();
  if (!title || title.length > 120 || !details || details.length > 2000) {
    return res.status(400).json({ error: 'Title must be 1–120 characters and details 1–2000 characters after trimming.' });
  }
  res.locals.activity = { title, details };
  next();
}
