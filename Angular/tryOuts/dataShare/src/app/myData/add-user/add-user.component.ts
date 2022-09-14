import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @Output() userAdd: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  dataAdd = new FormGroup({
    uid : new FormControl(''),
    uname : new FormControl(''),
    sname : new FormControl('')
  });

  onClicked(addUser:any) {
    this.userAdd.emit(addUser);
  }
}
