import { Component } from '@angular/core';

/**
 * Atomic Design Level: Molecule
 *
 * This component is expected to compose the following atoms later:
 *   - AppInputComponent (app-input): the text field for entering a search query
 *   - AppButtonComponent (app-button): the submit / search trigger button
 *
 * It is intentionally kept isolated for now. No child components are imported.
 */
@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBarComponent {}
