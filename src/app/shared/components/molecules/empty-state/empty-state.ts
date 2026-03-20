import { Component } from '@angular/core';
import { LucideAngularModule, OctagonAlert } from 'lucide-angular';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './empty-state.html',
  styleUrl: './empty-state.scss',
})
export class EmptyStateComponent {
  readonly icons = { OctagonAlert };
}
