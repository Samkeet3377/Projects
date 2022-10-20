import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../../service/api/auth-guard.service';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class AuthGuard implements CanActivate {

  isAuth: string = 'false'
  constructor(
    private authService: AuthGuardService,
    private router: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.auth.subscribe((res) => {
      this.isAuth = res;
    })
    if (this.isAuth === 'true') {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
