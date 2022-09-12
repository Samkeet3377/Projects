import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  size:number = 16;
  userList: any = [];
  localItem: any;

  constructor() {
    this.localItem = localStorage.getItem('userList');
    if(this.localItem == null) {
      this.userList =[];
    } else {
      this.userList = JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void {
  }
  
  deleteUser(user:any) {
    const index = this.userList.indexOf(user);
    this.userList.splice(index, 1);
    localStorage.setItem("userList", JSON.stringify(this.userList));
  }
  addUser(user:any){
    this.userList.push(user); 
    localStorage.setItem("useList", JSON.stringify(this.userList));
  }
  toggleUser(user:any){ 
    const index = this.userList.indexOf(user);
    this.userList[index].active = !this.userList[index].active;
    localStorage.setItem("useList", JSON.stringify(this.userList));
  }
   
}
