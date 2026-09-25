-- Select your dedicated exercise database with USE before sourcing this file.
-- Re-running this script does not change an existing table or its records.
CREATE TABLE IF NOT EXISTS activities (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(120) NOT NULL,
  details TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
