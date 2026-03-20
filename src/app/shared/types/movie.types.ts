// App-level movie model — camelCase, genres resolved to names

export interface Movie {
  id: number;
  title: string;
  posterPath: string | null;
  backdropPath: string | null;
  overview: string;
  rating: number;
  voteCount: number;
  releaseDate: string;
  genres: string[];
}
