import { inject, TestBed, waitForAsync } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set user name', () => {
    const name = 'Test Name';
    service.setUserName(name);
    expect(service.getUserName()).toBe(name);
  });

  it('should toggle user name visibility', () => {
    expect(service.getShowUserName()).toBeFalse();

    service.showUserName();
    expect(service.getShowUserName()).toBeTrue();

    service.resetEvent();
    expect(service.getShowUserName()).toBeFalse();
  });

  it('should return value from observable', waitForAsync(
    inject([UserService], (userService: UserService) => {
      userService.reset.subscribe((result) => expect(result).toBeFalse());
    })
  ));
});
