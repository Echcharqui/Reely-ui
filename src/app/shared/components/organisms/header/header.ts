import { Component } from '@angular/core';

/**
 * Atomic Design Level: Organism
 *
 * This component is expected to compose the following atoms and molecules later:
 *   - AppTitleComponent (app-title): the application logo or brand name
 *   - AppSearchBarComponent (app-search-bar): inline search input in the header
 *   - AppButtonComponent (app-button): navigation actions (e.g. watchlist shortcut)
 *
 * It is intentionally kept isolated for now. No child components are imported.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {}
