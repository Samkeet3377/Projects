import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../model/user';

@Injectable(

)
export class AuthService {

  baseUrl: string;

  constructor(
    private http: HttpClient
    ) {
    this.baseUrl = 'http://localhost:3000/'
  }

  isAuth(){
    let isAuth=localStorage.getItem('isAuth')
    if(isAuth=='true'){
      return true
    }else{
      return false
    }
  }


  getUser(): Observable<user[]> {
    const url = this.baseUrl + 'user';
    return this.http.get<user[]>(url);
  }

  addUser(data:user): Observable<user> {
    const url = this.baseUrl + 'user';
    return this.http.post<user>(url,data);
  }

}
