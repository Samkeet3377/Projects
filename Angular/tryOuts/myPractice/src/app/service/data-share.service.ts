import { Injectable } from '@angular/core';
import { users } from '../modal/userModal';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private userData: users[] = []
  constructor() { }

  getUserData() {
    return this.userData;
  }

  getUser(data:any) {
    const obj = { id: '',name: data, city: data };
    this.userData.push(obj);
  }
}
