import { Component, Input } from '@angular/core';
import { ButtonVariant } from './button.types';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  variant: ButtonVariant = 'primary';
}
