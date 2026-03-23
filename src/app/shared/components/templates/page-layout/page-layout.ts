import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../../organisms/header/header';
import { FooterComponent } from '../../organisms/footer/footer';
import { ModalComponent } from '../../organisms/modal/modal';
import { Auth } from '../../organisms/auth/auth';

@Component({
  selector: 'app-page-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ModalComponent, Auth],
  standalone: true,
  templateUrl: './page-layout.html',
  styleUrl: './page-layout.scss',
})
export class PageLayoutComponent {
  readonly authModalOpen = signal<boolean>(false);

  onProfileClicked(): void {
    this.authModalOpen.set(true);
  }

  onAuthModalClosed(): void {
    this.authModalOpen.set(false);
  }
}
