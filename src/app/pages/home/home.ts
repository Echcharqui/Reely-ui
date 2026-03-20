import { Component } from '@angular/core';
import { MovieRowComponent } from '../../shared/components/organisms/movie-row/movie-row';
import { HeroBanner } from '../../shared/components/organisms/hero-banner/hero-banner';

import { mapTmdbMovie } from '../../shared/utils/tmdb.utils';
import { getRandomInt } from '../../shared/utils/math.utils';
import { Movie } from '../../shared/types/movie.types';
import { TmdbMoviesResponse } from '../../shared/types/tmdb.types';

import trendingData from '../../../../mock-data/trending.json';
import popularData from '../../../../mock-data/popular.json';
import topRatedData from '../../../../mock-data/top-rated.json';

const trending = trendingData as TmdbMoviesResponse;
const Popular = popularData as TmdbMoviesResponse;
const Rated = topRatedData as TmdbMoviesResponse;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroBanner, MovieRowComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  readonly TrendingLabel: string = 'Trending Now';
  readonly PopularLabel: string = 'Popular Movies';
  readonly TopRatedLabel: string = 'Top Rated Movies';

  readonly trendingMovies: Movie[] = trending.results.map(mapTmdbMovie);
  readonly PopularMovies: Movie[] = Popular.results.map(mapTmdbMovie);
  readonly TopRatedMovies: Movie[] = Rated.results.map(mapTmdbMovie);

  readonly heroBannerMovie: Movie =
    this.trendingMovies[getRandomInt(0, this.trendingMovies.length)];
}
