import { Component, input, output, signal } from '@angular/core';
import { LucideAngularModule, X, Eye, EyeOff } from 'lucide-angular';
import { InputComponent } from '../../atoms/input/input';
import { UiButtonComponent } from '../../atoms/ui-button/ui-button';

import { AuthMode } from '../../../types/enum/auth.types';
import { ButtonsTypes } from '../../../types/enum/buttons.types';
import { Variants } from '../../../types/enum/Variants.type';

@Component({
  selector: 'app-auth',
  imports: [LucideAngularModule, InputComponent, UiButtonComponent],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {
  readonly mode = signal<AuthMode>(AuthMode.SIGN_IN);
  readonly showPassword = signal(false);
  readonly showPassword2 = signal(false);
  readonly closed = output<void>();

  readonly icons = { X, Eye, EyeOff };
  readonly buttonType = ButtonsTypes.SUBMIT;
  readonly buttonVariant = Variants.BRANDING;

  closeTheDialog(): void {
    this.closed.emit();
  }

  togglePassword(): void {
    this.showPassword.update((v) => !v);
  }

  togglePassword2(): void {
    this.showPassword2.update((v) => !v);
  }

  switchToSignInMode(): void {
    this.mode.set(AuthMode.SIGN_IN);
  }

  switchToSignUpMode(): void {
    this.mode.set(AuthMode.SIGN_UP);
  }
  switchToForgetPasswordMode(): void {
    this.mode.set(AuthMode.FORGOT_PASSWORD);
  }
}
