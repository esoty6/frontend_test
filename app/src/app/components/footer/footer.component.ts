import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [WrapperComponent, DropdownComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
