-- Run after schema.sql in your dedicated exercise database.
-- Fixed seed IDs make repeated setup harmless. Existing rows are never overwritten.
INSERT INTO activities (id, title, details)
SELECT 1, 'Board games', 'Meet in Room A'
WHERE NOT EXISTS (SELECT 1 FROM activities WHERE id = 1);

INSERT INTO activities (id, title, details)
SELECT 2, 'Drawing club', 'Bring a sketchbook'
WHERE NOT EXISTS (SELECT 1 FROM activities WHERE id = 2);
