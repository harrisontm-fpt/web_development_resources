import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findUserById, findUserByUsername, publicUser } from './users.js';

export function createLoginHandler({ jwtSecret, tokenTtl }) {
  return async function login(req, res) {
    const { username, password } = req.body ?? {};
    if (
      typeof username !== 'string' || username.trim().length === 0 ||
      username.length > 64 || typeof password !== 'string' ||
      password.length === 0 || Buffer.byteLength(password, 'utf8') > 72
    ) {
      return res.status(400).json({ error: 'Supply a username and a password of at most 72 UTF-8 bytes.' });
    }
    const user = findUserByUsername(username);
    // TODO 1 in the starter: compare the password with the stored hash.
    // Comparing a real hash for unknown usernames keeps the failure path similar.
    const comparisonHash = user?.passwordHash ?? findUserByUsername('alice').passwordHash;
    const passwordMatches = false; // TODO 1
    if (!user || !passwordMatches) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    // TODO 2 in the starter: issue a token with a user ID, not a password.
    const token = null; // TODO 2
    if (token === null) {
      return res.status(501).json({ error: 'Complete TODO 2 to issue an access token.' });
    }
    res.set('Cache-Control', 'no-store');
    return res.json({ token, user: publicUser(user) });
  };
}

export function createRequireAuth({ jwtSecret }) {
  return function requireAuth(req, res, next) {
    const match = /^Bearer ([^\s]+)$/i.exec(req.get('Authorization') ?? '');
    if (!match) {
      res.set('WWW-Authenticate', 'Bearer');
      return res.status(401).json({ error: 'A valid bearer token is required.' });
    }

    // TODO 3 in the starter: verify before reading identity or continuing.
    let claims;
    try {
      throw new Error('TODO 3: verify the token before allowing access.');
    } catch {
      res.set('WWW-Authenticate', 'Bearer');
      return res.status(401).json({ error: 'A valid bearer token is required.' });
    }
    if (typeof claims !== 'object' || typeof claims.sub !== 'string' || !Number.isInteger(claims.exp)) {
      return res.status(401).json({ error: 'A valid bearer token is required.' });
    }
    const user = findUserById(claims.sub);
    if (!user) {
      return res.status(401).json({ error: 'A valid bearer token is required.' });
    }
    // Current permissions come from server records, never from req.body.
    req.user = publicUser(user);
    res.set('Cache-Control', 'no-store');
    return next();
  };
}

export function requireOrganiser(req, res, next) {
  if (req.user?.role !== 'organiser') {
    return res.status(403).json({ error: 'Organiser access is required.' });
  }
  return next();
}
