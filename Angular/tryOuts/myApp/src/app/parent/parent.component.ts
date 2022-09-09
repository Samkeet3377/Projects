import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  size = 16;
  color = '';
  // userList = [
  //   { id:1, name: 'Samkeet', sname: 'Kevat'},
  //   { id:2, name: 'Ravi', sname: 'Singh'},
  //   { id:3, name: 'Kapil', sname: 'Kuntal'},
  //   { id:4, name: 'Raj', sname: 'Patel'},
  // ]

  userList = [ 
    'samkeet', 'ravi', 'kapil'
  ]

  addUser(newUser: any) {
    this.userList.push(newUser);
  }
}
