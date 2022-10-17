import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bike, car } from '../../product/model/model';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class ApiService {

  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/';
  }

// get Bikes DATA from API
getBikes(): Observable<bike[]> {
  const url = this.baseUrl + 'bikes';
  return this.http.get<bike[]>(url);
}
// get Cars DATA from API
getCars(): Observable<car[]> {
  const url = this.baseUrl + 'cars';
  return this.http.get<car[]>(url);
}

}
