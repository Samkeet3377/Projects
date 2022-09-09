import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  @Input() userData :any = [];
  @Output() addUserEvent= new EventEmitter<any>()

  addNewUser(value: any) {
    this.addUserEvent.emit(value);
  }
  
}
