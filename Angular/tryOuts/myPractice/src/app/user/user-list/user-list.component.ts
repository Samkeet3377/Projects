import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/modal/userModal';
import { DataShareService } from 'src/app/service/data-share.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  users:any=[]

  constructor( private dataShareSevice: DataShareService ) {
    this.users = [
      { id:1, name: 'samkeet', city: 'bilimora' },
      { id:2, name: 'kapil', city: 'valsad' },
      { id:3, name: 'ravi', city: 'umargam' },
      { id:4, name: 'amresh', city: 'daman' }
    ]
   }

  ngOnInit(): void {

  }

  pushUser(data:any) {
    const obj = { id: '', name: data, city: data };
    this.users.push(obj);
  }
}
