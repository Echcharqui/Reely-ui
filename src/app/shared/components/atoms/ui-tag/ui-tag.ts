import { Component, input } from '@angular/core';

export type UiTagVariant = 'outline' | 'fill';

@Component({
  selector: 'app-ui-tag',
  standalone: true,
  templateUrl: './ui-tag.html',
  styleUrl: './ui-tag.scss',
})
export class UiTagComponent {
  readonly variant = input<UiTagVariant>('fill');
}
