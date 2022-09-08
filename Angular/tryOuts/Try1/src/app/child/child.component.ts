import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() userList: any = []; //for Parent to Child
  @Output() onSelected = new EventEmitter<any>(); //for Child to Parent
  constructor() { }

  ngOnInit(): void {
  }

  //for Child to Parent
  onSelectedUser(user:any) {
    // console.log(user);
    this.onSelected.emit(user);
  }

}
