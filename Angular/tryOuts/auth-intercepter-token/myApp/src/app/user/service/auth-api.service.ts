import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthApiService {

  private readonly token_name = 'auth_token';
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(
    private http: HttpClient
  ) {
    const token = localStorage.getItem(this.token_name);
    this._isLoggedIn$.next(!!this.token);
  }

  login(userData: any) {
    // const url = environment.baseUrl + 'login';
    return this.http.post('login', userData)
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          localStorage.setItem(this.token_name, response.token);
        })
      );
  }

  get token() {
    return localStorage.getItem(this.token_name);
  }

}
