import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthApiService {

  userInfo = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();

  constructor(
    public http: HttpClient
  ) {
    this.loadUserInfo();
  }

  userLogin(login: any): Observable<boolean> {
    if (login && login.username && login.password) {
      const sampleJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJwYXNzd29yZCI6IjEyMzQiLCJpZCI6MSwidXNlck5hbWUiOiJ0ZXN0In0.BOjHPd8MZg2O7dDRAjZ9A9rO5_PGNExyQEFG-0bxRy4";

      return this.http.post("http://localhost:3000/login", login).pipe(
        map((data: any) => {
          if (!data) {
            return false;
          }
          localStorage.setItem("access_token", data.access_token);
          const decodedUser = this.jwtHelper.decodeToken(data.access_token);
          this.userInfo.next(decodedUser);
          return true;
        }));
    }
    return of(false);
  }

  loadUserInfo() {
    let userdata = this.userInfo.getValue();
    if (!userdata) {
      const access_token = localStorage.getItem('access_token');
      if (access_token) {
        userdata = this.jwtHelper.decodeToken(access_token);
        this.userInfo.next(userdata);
      }
    }
  }

}
