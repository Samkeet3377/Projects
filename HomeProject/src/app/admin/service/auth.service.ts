import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable(
  {
  providedIn: 'root'
}
)
export class AuthService {

  constructor(
    private http: HttpClient,
    ) {

   }

   baseUrl: string =  "http://localhost:3000/"

  addUser(data:any): Observable<any> {
    const url = this.baseUrl + "signupUsers/";
    return this.http.post(url,data);
  }

  getUser(): Observable<any> {
    const url = this.baseUrl + "signupUsers/";
    return this.http.get(url);
  }

}
