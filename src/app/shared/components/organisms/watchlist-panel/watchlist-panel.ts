import { Component } from '@angular/core';

/**
 * Atomic Design Level: Organism
 *
 * This component is expected to compose the following organisms and molecules later:
 *   - AppMovieCardComponent (app-movie-card): renders each saved movie in the panel
 *   - AppEmptyStateComponent (app-empty-state): shown when the watchlist is empty
 *
 * It is intentionally kept isolated for now. No child components are imported.
 */
@Component({
  selector: 'app-watchlist-panel',
  standalone: true,
  templateUrl: './watchlist-panel.html',
  styleUrl: './watchlist-panel.scss',
})
export class WatchlistPanelComponent {}
