import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthApiService } from '../service/auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthApiService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userData = this.authService.userInfo.getValue();
    if (userData && userData) { // sub represents user id value
      if (state.url.indexOf("/login") != -1) {
        // loggin user trying to access login page
        this.router.navigate(["/dashboard"]);
        return false;
      }
      else {
        return true;
      }
    } else {
      if (state.url.indexOf("/login") == -1) {
        // not logged in users only navigate to login page
        this.router.navigate(["/login"]);
        return false;
      }
      else {
        return true;
      }
    }
  }
}

