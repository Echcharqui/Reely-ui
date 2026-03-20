# Reely

> **Discover. Explore. Watch.**
> A modern movie discovery experience powered by the TMDB API.

Reely is a sleek, fast frontend application that lets you browse trending movies, search the entire TMDB catalogue, dive into detailed movie pages, and build a personal watchlist — all wrapped in a cinematic dark UI designed to feel right at home on any screen.

---

## What it does

| Feature | Description |
|---|---|
| **Home feed** | Hero banner showcasing a featured film + curated horizontal movie rows (trending, top rated, etc.) |
| **Search** | Real-time search across the TMDB catalogue |
| **Movie details** | Full page with backdrop, rating, overview, genres, and cast |
| **Watchlist** | Save movies to a personal list, persisted across sessions |
| **Responsive** | Fluid layout that works from mobile to wide desktop |

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Angular 21 (standalone components, no NgModules) |
| Language | TypeScript 5.9 — strict mode |
| Reactivity | Angular Signals (no RxJS for local state) |
| Styling | SCSS with a custom design token system |
| Icons | Lucide Angular |
| Testing | Vitest |
| Data source | [TMDB API v3](https://developer.themoviedb.org/docs) |

---

## Project structure

```
src/
├── app/
│   ├── pages/                        # Route-level pages
│   │   ├── home/                     # Landing page (hero + movie rows)
│   │   ├── search/                   # Search results
│   │   ├── movie-details/            # Single movie page
│   │   ├── watchlist/                # Saved movies
│   │   └── not-found/               # 404
│   └── shared/
│       ├── components/
│       │   ├── atoms/                # ui-button, ui-tag
│       │   ├── molecules/            # empty-state
│       │   ├── organisms/            # header, footer, hero-banner, movie-card, movie-row
│       │   └── templates/            # page-layout
│       ├── types/                    # Movie, TMDB response, and genre types
│       └── utils/                    # Image URL builder, TMDB mapper, math helpers
├── environments/                     # Runtime config (API keys, base URLs)
└── styles/
    ├── abstracts/                    # Tokens: colors, spacing, typography, variables, mixins
    └── base/                         # Reset, globals, helpers
```

---

## Getting started

### Prerequisites

- Node.js ≥ 20
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### 1 — Clone and install

```bash
git clone https://github.com/Echcharqui/Reely-ui.git
cd Reely-ui
npm install
```

### 2 — Configure environment

Copy the example env file and fill in your TMDB key:

```bash
cp .env.example .env
```

```env
# .env
TMDB_API_KEY=your_api_key_here
```

The `generate-env.js` script runs automatically before `npm start` and `npm run build` — it reads `.env` and writes the Angular environment files so your key never touches version control.

### 3 — Run

```bash
npm start          # dev server → http://localhost:4200
npm run build      # production build → dist/
npm run watch      # dev build with watch mode
npm test           # unit tests with Vitest
```

---

## Environment files

The actual environment files are gitignored. Use the example as a template:

```
src/environments/
├── environment.example.ts   ✅ committed — safe to share
├── environment.ts           ❌ gitignored — your dev keys
└── environment.prod.ts      ❌ gitignored — your prod keys
```

TMDB image size options available in the config:

| Config key | Available sizes |
|---|---|
| `posterSize` | `w92` `w154` `w185` `w342` `w500` `w780` `original` |
| `backdropSize` | `w300` `w780` `w1280` `original` |
| `profileSize` | `w45` `w185` `h632` `original` |

---

## Design system

All visual decisions live in `src/styles/abstracts/` as SCSS tokens — nothing is hardcoded in components.

```
_colors.scss      → brand palette, surface layers, text hierarchy
_spacing.scss     → 4px base scale (space-1 … space-8)
_typography.scss  → font families, size scale, weights, line heights
_variables.scss   → radii, shadows, transitions, layout constants
_mixins.scss      → reusable SCSS utilities (truncate, visually-hidden, etc.)
```

Component styles import only what they need via `@use`:

```scss
@use '../../../../styles/abstracts/colors' as *;
@use '../../../../styles/abstracts/spacing' as *;
```

---

## Component conventions

- All components are **standalone** (`standalone: true`) — no NgModule wiring needed
- Local state uses **Angular Signals** (`signal`, `computed`, `input`)
- Templates use the **new control flow syntax** (`@if`, `@for`, `@switch`)
- Each component lives in its own folder: `name.ts` · `name.html` · `name.scss` · `name.spec.ts`

### Generating a new component

```bash
ng generate component shared/components/organisms/my-component
```

---

## Key architectural decisions

**TMDB data mapping** — Raw API responses (`TmdbMovie`) are mapped to an internal `Movie` model at the boundary. Components never see snake_case fields or raw genre IDs; they consume clean, typed objects.

**Image loading strategy** — The hero banner uses `src` + `srcset` with three TMDB resolutions (`w300`, `w780`, `w1280`). The browser picks the right one for the current viewport. On error, it falls back to a placeholder so layout never breaks.

**Uniform card dimensions** — Movie cards have a fixed-height info block, a 2-line clamped title, and horizontally scrollable genre tags. No matter the title length or genre count, every card in a row is the same height.

**Environment injection** — API keys are read from `.env` at build time via a Node script and written into gitignored TypeScript environment files. Nothing sensitive is ever committed.

---

## Data attribution

Movie data and images are provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).

> *This product uses the TMDB API but is not endorsed or certified by TMDB.*
