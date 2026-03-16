import { Component } from '@angular/core';

/**
 * Atomic Design Level: Organism
 *
 * This component is expected to compose the following atoms and molecules later:
 *   - AppTitleComponent (app-title): movie title
 *   - AppTagComponent (app-tag): genre and rating chips
 *   - AppMovieMetaComponent (app-movie-meta): grouped metadata row
 *   - AppButtonComponent (app-button): watchlist / details action button
 *
 * It is intentionally kept isolated for now. No child components are imported.
 */
@Component({
  selector: 'app-movie-card',
  standalone: true,
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCardComponent {}
