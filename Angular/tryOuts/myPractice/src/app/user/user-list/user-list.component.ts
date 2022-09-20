import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/modal/userModal';
import { DataShareService } from 'src/app/service/data-share.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  columns = ['Id','Name','City'];
  users : users []= [];

  constructor( private dataShareSevice: DataShareService ) {

   }

  ngOnInit(): void {
    this.dataShareSevice.getUser().subscribe( (rspns:any) => { this.users = rspns }, (error:any) => console.log("Error: "+error) );
  }

}
