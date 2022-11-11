import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { user } from 'src/app/user/model/user';
import { environment } from '../../../environments/environment';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class AuthGuardService {
  userInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();


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
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlck5hbWUiOiJzYW1rZWV0IiwiZW1haWwiOiJzYW1rZWV0QGVtYWlsLmNvbSIsInBhc3N3b3JkIjoic2Fta2VldCMxMjMiLCJ0b2tlbkV4cGlyZSI6IjE2NjgxMDUwMDAifQ.Kowq_OmBqk_d8qKmldDGmhexZEveT_pxZJ3T1nPel6o";
    const refreshToken = "dummy";
    localStorage.setItem('access_token', accessToken);
    // localStorage.setItem('refresh_token', refreshToken);
    const decryptUser = this.jwtHelper.decodeToken(accessToken);
    const data = { access_token: accessToken, refresh_token: refreshToken, userName: decryptUser.userName, expireToken: decryptUser.expireToken };
    this.userInfo.next(data);


    const api = this.baseUrl + 'users';
    return this.http.post(api, user).subscribe((postResult: any) => {
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
