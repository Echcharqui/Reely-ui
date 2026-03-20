import { Component, input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

export type UiButtonVariant = 'primary' | 'ghost';

@Component({
  selector: 'app-ui-button',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.scss',
})
export class UiButtonComponent {
  readonly variant = input<UiButtonVariant>('primary');
  readonly icon = input<LucideIconData | undefined>(undefined);
  readonly iconSize = input<number>(18);
}
