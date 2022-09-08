import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chil2',
  templateUrl: './chil2.component.html',
  styleUrls: ['./chil2.component.scss']
})
export class Chil2Component implements OnInit {

  
  @Output() addstrng: EventEmitter<any>;

  constructor() {
    this.addstrng = new EventEmitter();
   }

  ngOnInit(): void {
  }
  selectedUser: any;

  users = [
    { id: 1, name: 'Samkeet', sname: 'kevat' },
    { id: 2, name: 'Raj', sname: 'patel' },
    { id: 3, name: 'Kapil', sname: 'kuntal' },
  ];

  onSelectedUser(user:any) {
    this.selectedUser = user;
  }

  onClickRemove() {
    this.selectedUser = "";
  }
}
