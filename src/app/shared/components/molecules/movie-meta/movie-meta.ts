import { Component } from '@angular/core';

/**
 * Atomic Design Level: Molecule
 *
 * This component is expected to compose the following atoms later:
 *   - AppTitleComponent (app-title): displays the movie title or secondary label
 *   - AppTagComponent (app-tag): displays genre tags, ratings, or other metadata chips
 *
 * It is intentionally kept isolated for now. No child components are imported.
 */
@Component({
  selector: 'app-movie-meta',
  standalone: true,
  templateUrl: './movie-meta.html',
  styleUrl: './movie-meta.scss',
})
export class MovieMetaComponent {}
