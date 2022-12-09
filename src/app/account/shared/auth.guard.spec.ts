import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: router }],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('canActive should return true when called', () => {
    guard.token = true;

    let result = guard.canActivate();

    expect(result).toBe(true);
  });

  it('canActive should return false and navigate to login when called', () => {
    guard.token = false;

    let result = guard.canActivate();

    expect(router.navigate).toHaveBeenCalledWith(['login']);
    expect(result).toBe(false);
  });
});
