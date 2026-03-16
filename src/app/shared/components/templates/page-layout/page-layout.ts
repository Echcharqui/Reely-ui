import { Component } from '@angular/core';

/**
 * Atomic Design Level: Template
 *
 * This component is expected to compose the following organisms and project content later:
 *   - AppHeaderComponent (app-header): the top navigation organism
 *   - <ng-content>: content projection slot for page-specific organisms and molecules
 *
 * It defines the overall page skeleton (header, main content area, optional footer)
 * without prescribing what goes inside each section.
 *
 * It is intentionally kept isolated for now. No child components are imported.
 */
@Component({
  selector: 'app-page-layout',
  standalone: true,
  templateUrl: './page-layout.html',
  styleUrl: './page-layout.scss',
})
export class PageLayoutComponent {}
