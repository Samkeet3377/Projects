import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { testPostScroll } from 'src/app/users/model/testModel';
import { city, country, state } from '../../modal/test';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string;
  // private testBaseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/';
    // this.testBaseUrl = 'https://api.countrystatecity.in/v1';
  }

  getCities(): Observable<city[]> {
    const url = this.baseUrl + 'cities';
    return this.http.get<city[]>(url);
  }
  getStates(): Observable<state[]> {
    const url = this.baseUrl + 'states';
    return this.http.get<state[]>(url);
  }
  getCountries(): Observable<country[]> {
    const url = this.baseUrl + 'countries';
    // const testUrl = this.testBaseUrl + 'countries';
    return this.http.get<country[]>(url);
    // return this.http.get<country[]>(testUrl);
  }


  // get POSTs 10 per page
  getPosts(page: number): Observable<testPostScroll[]> {
    // const url = `https://jsonplaceholder.typicode.com/comments?_page=${page}&per_page=10`;
    const url = `https://jsonplaceholder.typicode.com/comments?_page=` + page;
    return this.http.get<testPostScroll[]>(url);
  }
}
