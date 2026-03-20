import { Component, computed, input, signal } from '@angular/core';
import { UiTagComponent } from '../../atoms/ui-tag/ui-tag';
import { getPosterUrl } from '../../../../shared/utils/image.utils';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [UiTagComponent],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCardComponent {
  // --- Inputs (passed in by the parent movie-row) ---
  readonly title = input<string>('');
  readonly posterPath = input<string | null>(null); // raw path from TMDB (e.g. "/abc.jpg")
  readonly rating = input<number>(0);
  readonly genres = input<string[]>([]);

  // Builds the full TMDB poster URL from the raw path.
  // Returns null if posterPath is null (no image available from the API).
  readonly posterUrl = computed(() => getPosterUrl(this.posterPath()));

  // Tracks whether the poster image fetch failed (network error, 404, etc.)
  // The template binds (error) on the <img> to flip this to true.
  // When true, the template switches to the placehold.co fallback URL instead.
  readonly posterFailed = signal(false);

  // Formats the rating number to one decimal place for display (e.g. 7.4)
  readonly ratingDisplay = computed(() => this.rating().toFixed(1));
}
