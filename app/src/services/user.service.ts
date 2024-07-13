import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userName = '';
  showUserName = false;

  setUserName = (userName: string) => {
    this.userName = userName;
  };

  getUserName = () => this.userName;

  getShowUserName = () => !!this.showUserName;

  toggleShowUserName = () => {
    console.log(this.userName);

    this.showUserName = !this.showUserName;
  };
}
