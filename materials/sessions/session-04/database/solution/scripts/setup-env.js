import { copyFile } from 'node:fs/promises';
import { constants } from 'node:fs';

try {
  await copyFile('.env.example', '.env', constants.COPYFILE_EXCL);
  console.log('Created .env. Set DB_PASSWORD to your local database account password before starting.');
} catch (error) {
  if (error.code !== 'EEXIST') throw error;
  console.log('Existing .env preserved.');
}
