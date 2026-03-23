import { Component, input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

import { ButtonsTypes } from '../../../types/enum/buttons.types';
import { Variants } from '../../../types/enum/Variants.type';

@Component({
  selector: 'app-ui-button',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.scss',
})
export class UiButtonComponent {
  readonly variant = input<Variants>(Variants.PRIMARY);
  readonly icon = input<LucideIconData | undefined>(undefined);
  readonly iconSize = input<number>(18);
  readonly btnType = input<ButtonsTypes>(ButtonsTypes.BUTTON);
}
