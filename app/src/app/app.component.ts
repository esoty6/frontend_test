import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlocksContentComponent } from './components/blocks-content/blocks-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    BlocksContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(protected userService: UserService) {
    this.userService.setUserName('Kamil Witek');
  }

  getUserName = () => this.userService.getUserName();
  getShowUserName = () => this.userService.getShowUserName();
}
