import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(protected userService: UserService) {
    this.userService.setUserName('Jan Kowalski');
  }

  getUserName = () => this.userService.getUserName();
  getShowUserName = () => this.userService.getShowUserName();
}
