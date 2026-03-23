// Raw TMDB API response shapes (snake_case, as returned by the API)

export interface TmdbMovie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genre_ids: number[];
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  adult: boolean;
  video: boolean;
  original_language: string;
  media_type?: string;
}

export interface TmdbMoviesResponse {
  page: number;
  results: TmdbMovie[];
  total_pages: number;
  total_results: number;
}
