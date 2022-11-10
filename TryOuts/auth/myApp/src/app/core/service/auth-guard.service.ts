import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { user } from 'src/app/user/model/user';
import { environment } from '../../../environments/environment';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class AuthGuardService {
  public headers = new HttpHeaders().set('Content-Type', 'application-json');
  public baseUrl: string;
  public currentUser = {};

  constructor(
    private http: HttpClient, private route: Router
  ) {
    this.baseUrl = environment.baseUrl;
  }

  //signup
  signUp(user: user): Observable<any> {
    const api = this.baseUrl + 'users';
    this.route.navigate(['/login']);
    return this.http.post(api, user);
  }

  //signin
  signIn(user: user) {
    const api = this.baseUrl + 'signin';
    return this.http.post(api, user).subscribe((postResult: any) => {
      localStorage.setItem('access_token', postResult.token);
      this.getUserProfile(postResult.id).subscribe((userResult) => {
        this.currentUser = userResult;
        this.route.navigate(['/home' + userResult.id]);
      });
    });
  }

  //getToken
  getToken() {
    return localStorage.getItem('access_token');
  }

  //check loggedIn
  get IsLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  //logOut
  doLogout() {
    const removeToken = localStorage.removeItem('access_token');
    if (removeToken === null) {
      this.route.navigate(['/login']);
    }
  }


  //get user
  getUserProfile(id: any): Observable<any> {
    const api = this.baseUrl + 'users' + id;
    return this.http.get(api, { headers: this.headers }).pipe(map((result) => {
      return result || {};
    })
    );
  }

  getUser(): Observable<user[]> {
    const url = this.baseUrl + 'users';
    return this.http.get<user[]>(url);
  }
  addUser(data: user): Observable<user> {
    const url = this.baseUrl + 'users';
    return this.http.post<user>(url, data);
  }
}
