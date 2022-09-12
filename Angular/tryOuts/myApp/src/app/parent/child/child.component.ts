import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() userList: any;
  @Input() i: any;
  @Output() userDelete: EventEmitter<any> = new EventEmitter();
  @Output() userCheckbox: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(user: any){
    this.userDelete.emit(user);
  }
  onCheckboxClick(user:any){
    this.userCheckbox.emit(user);
  }

}
