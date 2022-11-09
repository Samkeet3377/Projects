import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { users } from 'src/app/users/model/userModel';
import { environment } from '../../../../../environments/environment';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

  // Sign-up
  signUp(user: users): Observable<any> {
    let api = environment.baseUrl + `/users`;
    return this.http.post(api, user);
  }
  // Sign-in
  signIn(user: users) {
    let api = environment.baseUrl + `/users`;
    return this.http
      .post<any>(api, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['home/' + res.msg._id]);
        });
      });
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = environment.baseUrl + `users` + id;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      })
    );
  }

}
