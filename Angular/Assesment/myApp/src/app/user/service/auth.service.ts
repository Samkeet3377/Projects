import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { user } from '../model/user';

@Injectable()
export class AuthService {

  baseUrl: string;
  visibleBS: BehaviorSubject<boolean>;

  // isAuthorized: boolean;

  constructor(
    private route: Router,
    private http: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/';

    this.visibleBS = new BehaviorSubject(false);

    // this.isAuthorized = false;
  }

  isAuth() {
    let isAuth = localStorage.getItem('isAuth');
    if (isAuth == 'true') {
      // this.isAuthorized = true;
      this.visibleBS.next(true);
      return true;
    } else {
      // this.isAuthorized = false;
      this.visibleBS.next(false);
      return false;
    }
  }

  getUser(): Observable<user[]> {
    const url = this.baseUrl + 'user';
    return this.http.get<user[]>(url);
  }

  addUser(data: user): Observable<user> {
    const url = this.baseUrl + 'user';
    return this.http.post<user>(url, data);
  }

}
