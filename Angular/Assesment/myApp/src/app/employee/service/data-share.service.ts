import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { emp } from '../emp';

@Injectable(
  { providedIn: 'root' }
)
export class DataShareService {

  baseUrl : string = "http://localhost:3000/"
  test : string = "http://localhost:3000/employee"

  constructor(private http : HttpClient) { }

  getEmp(): Observable<any> {
    const url = this.baseUrl + 'employee';
    return this.http.get(url);
    // return this.http.get(this.test);
  }
  addEmp(data:emp[]): Observable<any> {
    const url = this.baseUrl + 'employee';
    return this.http.post(url,data);
  }
  deleteEmp(id:number): Observable<any> {
    const url = this.baseUrl + 'employee/' + id;
    return this.http.delete(url);
  }
  editEmp(data:emp[], id:number): Observable<any> {
    const url = this.baseUrl + 'employee/' + id;
    return this.http.put(url, data);
  }

  getEmpById(id:number){
    const url = this.baseUrl + 'employee/' + id;
    return this.http.get(url);
  }
}
