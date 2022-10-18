import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class AuthGuardService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/';
  }

  getUser() {
    const url = this.baseUrl + 'users';
    return this.http.get(url);
  }
}
