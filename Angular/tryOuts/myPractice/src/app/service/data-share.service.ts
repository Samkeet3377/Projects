import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from '../modal/userModal';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  url : string = "http://localhost:3000/users/"

  constructor(private http : HttpClient) { }

  getUser() {
    return this.http.get<users[]>(this.url);
  }
}
