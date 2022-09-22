import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { emp } from '../emp';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  url : string = "http://localhost:3000/employee/"

  constructor(private http : HttpClient) { }

  getEmp() {
    return this.http.get<emp[]>(this.url);
  }
}
