import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  readonly type = input<string>('text');
  readonly placeholder = input<string>('');
  readonly inputId = input<string>('');
  readonly autocomplete = input<string>('off');
  /** Adds right padding to leave room for an absolutely-positioned trailing action */
  readonly withTrailing = input<boolean>(false);
}
