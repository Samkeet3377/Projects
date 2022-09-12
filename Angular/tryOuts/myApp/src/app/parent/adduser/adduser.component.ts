import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  id: any = 0;
  name = new FormControl;
  active: boolean = false;
  @Output() userAdd: EventEmitter<any> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const user = {
      id: 9,
      name: this.name,
      active: true
    }
    this.userAdd.emit(user);
  }

}
