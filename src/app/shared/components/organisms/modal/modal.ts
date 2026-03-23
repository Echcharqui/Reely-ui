import { Component, HostListener, input, output } from '@angular/core';
import { Size } from '../../../types/enum/sizes.types';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class ModalComponent {
  readonly isOpen = input<boolean>(false);
  /** 'sm' = 400px | 'md' = 540px | 'lg' = 720px */
  readonly size = input<Size>(Size.MD);
  readonly closed = output<void>();


  close(): void {
    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen()) this.close();
  }
}
