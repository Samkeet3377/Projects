import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../api/auth-guard.service';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class AuthGuard implements CanActivate {

isAuth:boolean=false
  constructor(
    private authService: AuthGuardService,
    private router: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.auth.subscribe((res) => {
      this.isAuth= res
    })
    return this.isAuth
  }

}
