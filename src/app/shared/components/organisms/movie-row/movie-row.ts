import { Component, ElementRef, input, viewChild } from '@angular/core';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';
import { MovieCardComponent } from '../movie-card/movie-card';
import { EmptyStateComponent } from '../../molecules/empty-state/empty-state';
import { Movie } from '../../../types/movie.types';

const SCROLL_AMOUNT = 480;

@Component({
  selector: 'app-movie-row',
  standalone: true,
  imports: [LucideAngularModule, MovieCardComponent, EmptyStateComponent],
  templateUrl: './movie-row.html',
  styleUrl: './movie-row.scss',
})
export class MovieRowComponent {
  readonly rowLabel = input<string>('');
  readonly movies = input<Movie[]>([]);

  readonly icons = { ChevronLeft, ChevronRight };

  private readonly scrollRef = viewChild<ElementRef<HTMLDivElement>>('scrollContainer');

  scrollLeft(): void {
    this.scrollRef()?.nativeElement.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.scrollRef()?.nativeElement.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
  }
}
