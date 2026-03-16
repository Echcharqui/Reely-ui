import { Component } from '@angular/core';

/**
 * Atomic Design Level: Organism
 *
 * This component is expected to compose the following organisms later:
 *   - AppMovieCardComponent (app-movie-card): renders each movie as a card within the row
 *
 * It is intentionally kept isolated for now. No child components are imported.
 */
@Component({
  selector: 'app-movie-row',
  standalone: true,
  templateUrl: './movie-row.html',
  styleUrl: './movie-row.scss',
})
export class MovieRowComponent {}
