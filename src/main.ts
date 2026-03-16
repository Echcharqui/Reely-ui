import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

// / → redirects to /home
// /home → HomeComponent
// /search → SearchComponent
// /movie-details → MovieDetailsComponent
// /watchlist → WatchlistComponent
// /** → redirects to /home
