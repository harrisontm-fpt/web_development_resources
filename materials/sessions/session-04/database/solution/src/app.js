import express from 'express';
import { createActivityHandlers } from './activities.js';
import { validateActivity, validateId } from './validation.js';

export function createApp(pool) {
  const app = express();
  const handlers = createActivityHandlers(pool);
  app.disable('x-powered-by');
  app.use(express.json({ limit: '32kb' }));
  app.get('/api/activities', handlers.list);
  app.get('/api/activities/:id', validateId, handlers.getOne);
  app.post('/api/activities', validateActivity, handlers.create);
  app.use((req, res) => res.status(404).json({ error: 'Route not found.' }));
  // Express 5 forwards rejected async handlers here automatically.
  app.use((error, req, res, next) => {
    if (res.headersSent) return next(error);
    if (error.type === 'entity.parse.failed') {
      return res.status(400).json({ error: 'Request body must be valid JSON.' });
    }
    if (error.type === 'entity.too.large') {
      return res.status(413).json({ error: 'Request body is too large.' });
    }
    return res.status(500).json({ error: 'Unable to complete the database request.' });
  });
  return app;
}
