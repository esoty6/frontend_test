import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userName = '';
  shouldShowUserName = false;
  private resetSource = new BehaviorSubject(false);
  reset = this.resetSource.asObservable();

  setUserName = (userName: string) => {
    this.userName = userName;
  };

  getUserName = () => this.userName;

  getShowUserName = () => !!this.shouldShowUserName;

  showUserName = () => {
    this.shouldShowUserName = true;
  };

  resetEvent = () => {
    this.shouldShowUserName = false;
    this.resetSource.next(true);
  };
}
