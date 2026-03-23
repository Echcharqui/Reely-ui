import { Component, signal } from '@angular/core';
import { MovieRowComponent } from '../../shared/components/organisms/movie-row/movie-row';
import { HeroBanner } from '../../shared/components/organisms/hero-banner/hero-banner';

import { mapTmdbMovie } from '../../shared/utils/tmdb.utils';
import { getRandomInt } from '../../shared/utils/math.utils';
import { type Movie } from '../../shared/types/interfaces/movie.types';
import { type TmdbMoviesResponse } from '../../shared/types/interfaces/tmdb.types';

import trendingData from '../../../../mock-data/trending.json';
import popularData from '../../../../mock-data/popular.json';
import nowPlayingdData from '../../../../mock-data/now-playing.json';
import topRatedData from '../../../../mock-data/top-rated.json';

const trending = trendingData as TmdbMoviesResponse;
const Popular = popularData as TmdbMoviesResponse;
const nowPlaying = nowPlayingdData as TmdbMoviesResponse;
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
  readonly NowPlaying: string = 'Now playing on theatres';
  readonly TopRatedLabel: string = 'Top Rated Movies';

  trendingMovies = signal<Movie[]>(trending.results.map(mapTmdbMovie));
  PopularMovies = signal<Movie[]>(Popular.results.map(mapTmdbMovie));
  NowplayingMovies = signal<Movie[]>(nowPlaying.results.map(mapTmdbMovie));
  TopRatedMovies = signal<Movie[]>(Rated.results.map(mapTmdbMovie));

  heroBannerMovie = signal<Movie>(
    this.trendingMovies()[getRandomInt(0, this.trendingMovies().length - 1)],
  );
}
