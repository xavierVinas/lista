import { Component, input, Input, InputSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [ButtonModule, ProgressBarModule],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.scss',
})
export class ListCardComponent {
  public name: InputSignal<string> = input.required<string>();
}
