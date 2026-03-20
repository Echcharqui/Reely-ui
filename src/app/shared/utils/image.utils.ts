import { environment } from '../../../environments/environment';

const { imageBaseUrl, posterSize, backdropSize, profileSize } = environment.tmdb;

/**
 * Builds a TMDB image URL with an explicit size string (e.g. `'w780'`, `'original'`).
 * Use this when you need a size that differs from the environment defaults,
 * such as generating `srcset` entries at multiple resolutions.
 * @param path - The image path from the TMDB API (e.g. `/abc123.jpg`), or null.
 * @param size - TMDB image size string (e.g. `'w300'`, `'w780'`, `'w1280'`, `'original'`).
 * @returns Full image URL, or null if path is not available.
 */
export function getTmdbImageUrl(path: string | null, size: string): string | null {
  return path ? `${imageBaseUrl}${size}${path}` : null;
}

/**
 * Returns the full TMDB poster image URL for the given path.
 * Uses the `posterSize` defined in environment config (default: w342).
 * @param path - The poster_path value from the TMDB API (e.g. `/abc123.jpg`), or null.
 * @returns Full image URL, or null if path is not available.
 */
export function getPosterUrl(path: string | null): string | null {
  return path ? `${imageBaseUrl}${posterSize}${path}` : null;
}

/**
 * Returns the full TMDB backdrop image URL for the given path.
 * Uses the `backdropSize` defined in environment config (default: w1280).
 * @param path - The backdrop_path value from the TMDB API (e.g. `/abc123.jpg`), or null.
 * @returns Full image URL, or null if path is not available.
 */
export function getBackdropUrl(path: string | null): string | null {
  return path ? `${imageBaseUrl}${backdropSize}${path}` : null;
}

/**
 * Returns the full TMDB profile image URL for the given path.
 * Uses the `profileSize` defined in environment config (default: w185).
 * @param path - The profile_path value from the TMDB API (e.g. `/abc123.jpg`), or null.
 * @returns Full image URL, or null if path is not available.
 */
export function getProfileUrl(path: string | null): string | null {
  return path ? `${imageBaseUrl}${profileSize}${path}` : null;
}
