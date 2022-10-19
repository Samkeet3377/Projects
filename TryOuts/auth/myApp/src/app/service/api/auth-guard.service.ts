import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { user } from 'src/app/user/model/user';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class AuthGuardService {

  auth: Subject<boolean>
  baseUrl: string;

  constructor(
    private http: HttpClient
    ) {
    this.auth = new Subject
    this.baseUrl = 'http://localhost:3000/';
  }

  getUser(): Observable<user[]> {
    const url = this.baseUrl + 'users';
    return this.http.get<user[]>(url);
  }
  addUser(data:user): Observable<user> {
    const url = this.baseUrl + 'users';
    return this.http.post<user>(url,data);
  }
}
