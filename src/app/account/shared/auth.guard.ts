import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}

  token: any = window.localStorage.getItem('token');

  canActivate(): boolean {
    if (this.token) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
