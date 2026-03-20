// Reads .env and generates src/environments/environment.ts + environment.prod.ts
// Runs automatically before start and build via npm "pre" hooks

const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const tmdb = {
  apiKey:       process.env.TMDB_API_KEY        || '',
  apiBaseUrl:   process.env.TMDB_API_BASE_URL   || 'https://api.themoviedb.org/3',
  imageBaseUrl: process.env.TMDB_IMAGE_BASE_URL || 'https://image.tmdb.org/t/p/',
  posterSize:   process.env.TMDB_POSTER_SIZE    || 'w342',
  backdropSize: process.env.TMDB_BACKDROP_SIZE  || 'w1280',
  profileSize:  process.env.TMDB_PROFILE_SIZE   || 'w185',
};

const header = `// Auto-generated from .env — do not edit manually\n`;

const devContent  = `${header}export const environment = ${JSON.stringify({ production: false, tmdb }, null, 2)};\n`;
const prodContent = `${header}export const environment = ${JSON.stringify({ production: true,  tmdb }, null, 2)};\n`;

const envDir = path.join(__dirname, '..', 'src', 'environments');
fs.mkdirSync(envDir, { recursive: true });
fs.writeFileSync(path.join(envDir, 'environment.ts'),      devContent);
fs.writeFileSync(path.join(envDir, 'environment.prod.ts'), prodContent);

console.log('✅ Environment files generated from .env');
