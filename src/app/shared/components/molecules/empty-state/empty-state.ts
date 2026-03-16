import { Component } from '@angular/core';

/**
 * Atomic Design Level: Molecule
 *
 * This component is expected to compose the following atoms later:
 *   - AppTitleComponent (app-title): the empty-state headline or message
 *   - AppButtonComponent (app-button): an optional call-to-action button
 *
 * It is intentionally kept isolated for now. No child components are imported.
 */
@Component({
  selector: 'app-empty-state',
  standalone: true,
  templateUrl: './empty-state.html',
  styleUrl: './empty-state.scss',
})
export class EmptyStateComponent {}
