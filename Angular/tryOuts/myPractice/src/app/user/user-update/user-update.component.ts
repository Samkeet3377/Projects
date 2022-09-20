import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { users } from 'src/app/modal/userModal';
import { DataShareService } from 'src/app/service/data-share.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})



export class UserUpdateComponent implements OnInit {

  @ViewChild ('userForm') userform?: NgForm;
  dataPush:any=[]
  @ViewChild ('userForm') formRef?: ElementRef<any>;

  formData:users;

  constructor( private dataShareSevice: DataShareService ) {
    this.formData = new users( 'id', 'name', 'city' )
   }

  ngOnInit(): void {
  }

  addUser() {
    this.dataShareSevice.getUser();
  }

  userUpdate(userData:any) {
    console.log(this.userform)
    const name = userData.form.value.name;
    const city = userData.form.value.city;
    console.log(name,city);
  }

}
