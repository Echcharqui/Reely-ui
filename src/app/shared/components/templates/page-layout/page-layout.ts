import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../organisms/header/header';
import { FooterComponent } from '../../organisms/footer/footer';

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
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  standalone: true,
  templateUrl: './page-layout.html',
  styleUrl: './page-layout.scss',
})
export class PageLayoutComponent {}
