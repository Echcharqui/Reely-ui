import { Component, ElementRef, input, output, viewChild } from '@angular/core';
import { LucideAngularModule, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-angular';
import { MovieCardComponent } from '../movie-card/movie-card';
import { EmptyStateComponent } from '../../molecules/empty-state/empty-state';
import { type Movie } from '../../../types/interfaces/movie.types';

const SCROLL_AMOUNT = 480;

@Component({
  selector: 'app-movie-row',
  standalone: true,
  imports: [LucideAngularModule, MovieCardComponent, EmptyStateComponent],
  templateUrl: './movie-row.html',
  styleUrl: './movie-row.scss',
})
export class MovieRowComponent {
  rowLabel = input<string>('');
  movies = input<Movie[]>([]);

  readonly icons = { ChevronLeft, ChevronRight, ArrowRight };

  private readonly scrollRef = viewChild<ElementRef<HTMLDivElement>>('scrollContainer');

  scrollLeft(): void {
    this.scrollRef()?.nativeElement.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.scrollRef()?.nativeElement.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
  }

  seeMore(): void {
    console.log('===> action : show all is clicked !');
  }
}
