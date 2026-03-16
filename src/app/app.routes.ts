import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { SearchComponent } from './pages/search/search';
import { MovieDetailsComponent } from './pages/movie-details/movie-details';
import { WatchlistComponent } from './pages/watchlist/watchlist';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'movie-details', component: MovieDetailsComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: '**', component: NotFoundComponent },
];
