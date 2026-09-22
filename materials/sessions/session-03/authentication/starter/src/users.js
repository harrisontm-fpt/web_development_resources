// Fictional, local-only demo accounts. Hashes were generated with bcrypt cost 12.
// Human-readable demo passwords are documented in the workshop, never returned by the API.
const users = [
  { id: 1, username: 'alice', passwordHash: '$2b$12$4L5z.Yhh1C80o1wyKG7VQOsGtEzE.CpUCqkskHqjbXpxvz4f3PJzC', role: 'student' },
  { id: 2, username: 'morgan', passwordHash: '$2b$12$OOiq2G9L5JaHpqm7QmoEyO0IMXvwE6kpwnZakn9xk7FxOGem9nAAS', role: 'organiser' },
];

export const findUserByUsername = (username) => users.find((user) => user.username === username);
export const findUserById = (id) => users.find((user) => String(user.id) === id);
export const publicUser = (user) => ({ id: user.id, username: user.username, role: user.role });
