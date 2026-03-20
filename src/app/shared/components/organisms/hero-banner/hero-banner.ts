import { Component, computed, input, signal } from '@angular/core';
import { LucideAngularModule, Play, Star, Info } from 'lucide-angular';

import { UiButtonComponent } from '../../atoms/ui-button/ui-button';
import { UiTagComponent } from '../../atoms/ui-tag/ui-tag';
import { Movie } from '../../../types/movie.types';
import { getBackdropUrl, getTmdbImageUrl } from '../../../utils/image.utils';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [LucideAngularModule, UiButtonComponent, UiTagComponent],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
})
export class HeroBanner {
  readonly icons = { Play, Star, Info };

  // The full movie object passed in from the parent (e.g. HomeComponent)
  readonly movie = input<Movie>();

  // Tracks whether the backdrop image failed to load (network error, 404, etc.)
  // Starts false; the template flips it to true via (error) on the <img>
  readonly backdropFailed = signal(false);

  // The `src` attribute — always a single URL the browser uses as the initial request.
  // Uses the smallest size (w300) so the first byte arrives fast.
  // Falls back to a placehold.co URL at the same width if the path is missing or the fetch failed.
  readonly backdropSrc = computed(() =>
    this.backdropFailed() || !this.movie()?.backdropPath
      ? 'https://placehold.co/300?text=REELY'
      : getTmdbImageUrl(this.movie()!.backdropPath, 'w300'),
  );

  // The `srcset` attribute — gives the browser a choice of three resolutions
  // so it picks the best one for the current viewport/screen density.
  // When the TMDB image fails (or has no path), all three slots switch to
  // placehold.co URLs sized to match, so the layout never breaks.
  readonly backdropSrcset = computed(() => {
    if (this.backdropFailed() || !this.movie()?.backdropPath) {
      return [
        'https://placehold.co/1280?text=REELY 1280w',
        'https://placehold.co/780?text=REELY 780w',
        'https://placehold.co/300?text=REELY 300w',
      ].join(', ');
    }
    const path = this.movie()!.backdropPath;
    return `${getBackdropUrl(path)} 1280w, ${getTmdbImageUrl(path, 'w780')} 780w, ${getTmdbImageUrl(path, 'w300')} 300w`;
  });

  // Extracts just the 4-digit year from the ISO release date string (e.g. "2024-07-19" → "2024")
  readonly releaseYear = computed(() => this.movie()?.releaseDate?.slice(0, 4) ?? null);
}
