import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bike, bikeInfo, car } from '../../product/model/model';

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

  // get Bikes from API
  getBikes(): Observable<bike[]> {
    const url = this.baseUrl + 'bikes';
    return this.http.get<bike[]>(url);
  }
  // get Cars from API
  getCars(): Observable<car[]> {
    const url = this.baseUrl + 'cars';
    return this.http.get<car[]>(url);
  }
  // get Bikes Base Info from API
  getBikesData(): Observable<bikeInfo[]> {
    const url = this.baseUrl + 'base-info';
    return this.http.get<bikeInfo[]>(url);
  }
  // upload Bike Info to API
  putBikeData(data: bikeInfo): Observable<bikeInfo> {
    const url = this.baseUrl + 'base-info';
    return this.http.put<bikeInfo>(url, data);
  }
}
