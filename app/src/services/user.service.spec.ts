import { TestBed } from '@angular/core/testing';

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

    service.toggleShowUserName();
    expect(service.getShowUserName()).toBeTrue();
  });
});
