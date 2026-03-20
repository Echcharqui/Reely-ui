import { Movie } from '../types/movie.types';
import { TmdbMovie } from '../types/tmdb.types';
import { TMDB_GENRE_MAP } from '../types/tmdb-genres';

/**
 * Maps a raw TMDB API movie object to the app-level `Movie` model.
 * Converts snake_case fields to camelCase and resolves genre IDs to names.
 * Unknown genre IDs (not present in TMDB_GENRE_MAP) are filtered out.
 * @param m - Raw movie object from the TMDB API response.
 * @returns App-level `Movie` object ready for use in components.
 */
export function mapTmdbMovie(m: TmdbMovie): Movie {
  return {
    id: m.id,
    title: m.title,
    posterPath: m.poster_path,
    backdropPath: m.backdrop_path,
    overview: m.overview,
    rating: m.vote_average,
    voteCount: m.vote_count,
    releaseDate: m.release_date,
    genres: m.genre_ids.map((id) => TMDB_GENRE_MAP[id]).filter(Boolean),
  };
}
