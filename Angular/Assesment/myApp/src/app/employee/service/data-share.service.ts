import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { emp } from '../emp';

@Injectable(
  // { providedIn: 'root' }
)
export class DataShareService {

  baseUrl : string = "http://localhost:3000/"

  constructor(private http : HttpClient) { }

  // get data from API
  getEmp(): Observable<emp[]> {
    const url = this.baseUrl + 'employee';
    return this.http.get<emp[]>(url);
  }
  // add data to API
  addEmp(data:emp): Observable<emp> {
    const url = this.baseUrl + 'employee';
    return this.http.post<emp>(url,data);
  }
  // delete data from API via ID
  deleteEmp(id:number): Observable<emp> {
    const url = this.baseUrl + 'employee/' + id;
    return this.http.delete<emp>(url);
  }
  // edit data from API via ID
  editEmp(data:emp, id:number): Observable<emp> {
    const url = this.baseUrl + 'employee/' + id;
    return this.http.put<emp>(url, data);
  }
  // get specific ID from API
  getEmpById(id:number): Observable<emp>{
    const url = this.baseUrl + 'employee/' + id;
    return this.http.get<emp>(url);
  }
}
