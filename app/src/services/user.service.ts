import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userName = '';
  shouldShowUserName = false;

  setUserName = (userName: string) => {
    this.userName = userName;
  };

  getUserName = () => this.userName;

  getShowUserName = () => !!this.shouldShowUserName;

  showUserName = () => {
    this.shouldShowUserName = true;
  };

  reset = () => {
    this.shouldShowUserName = false;
  };
}
