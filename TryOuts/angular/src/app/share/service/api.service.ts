import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { compony } from 'src/app/company/model';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class ApiService {

  baseUrl : string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  // get data from API
  getCompany(): Observable<compony[]> {
    const url = this.baseUrl + 'company';
    return this.http.get<compony[]>(url);
  }
  // add data to API
  addCompany(data:compony): Observable<compony> {
    const url = this.baseUrl + 'company';
    return this.http.post<compony>(url,data);
  }
  // delete data from API via ID
  deleteCompany(id:number): Observable<compony> {
    const url = this.baseUrl + 'company/' + id;
    return this.http.delete<compony>(url);
  }
  // edit data to API via ID
  editCompany(data:compony, id:number): Observable<compony> {
    const url = this.baseUrl + 'company/' + id;
    return this.http.put<compony>(url, data);
  }

}
