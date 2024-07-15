import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, WrapperComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(protected userService: UserService) {}
}
