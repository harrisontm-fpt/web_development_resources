import express from 'express';
import { validateConfig } from './config.js';
import { createLoginHandler, createRequireAuth, requireOrganiser } from './auth.js';

export function createApp(options) {
  const config = validateConfig(options);
  const app = express();
  app.disable('x-powered-by');
  app.use(express.json({ limit: '4kb' }));
  app.get('/api/activities', (req, res) => {
    res.json([{ id: 1, title: 'Campus coding club', published: true }]);
  });
  app.post('/api/auth/login', createLoginHandler(config));
  const requireAuth = createRequireAuth(config);
  app.get('/api/auth/me', requireAuth, (req, res) => res.json({ user: req.user }));

  // Optional extension: observe a server-side permission check.
  app.get('/api/staff/summary', requireAuth, requireOrganiser, (req, res) => {
    res.json({ unpublishedActivities: 2 });
  });
  app.use((req, res) => res.status(404).json({ error: 'Route not found.' }));
  app.use((error, req, res, next) => {
    if (res.headersSent) return next(error);
    if (error.type === 'entity.parse.failed') {
      return res.status(400).json({ error: 'Request body must be valid JSON.' });
    }
    if (error.type === 'entity.too.large') {
      return res.status(413).json({ error: 'Request body is too large.' });
    }
    // Never echo request bodies, tokens, password hashes, or stack traces.
    return res.status(500).json({ error: 'The server could not complete the request.' });
  });
  return app;
}
