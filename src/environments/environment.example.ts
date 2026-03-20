// Copy this file to environment.ts (dev) and environment.prod.ts (prod)
// and fill in your real API keys. These files are gitignored.

export const environment = {
  production: false, // set to true in environment.prod.ts

  tmdb: {
    apiKey: 'YOUR_TMDB_API_KEY',          // https://www.themoviedb.org/settings/api
    apiBaseUrl: 'https://api.themoviedb.org/3',
    imageBaseUrl: 'https://image.tmdb.org/t/p/',
    posterSize: 'w342',                   // options: w92 | w154 | w185 | w342 | w500 | w780 | original
    backdropSize: 'w1280',               // options: w300 | w780 | w1280 | original
    profileSize: 'w185',                 // options: w45 | w185 | h632 | original
  },
};
