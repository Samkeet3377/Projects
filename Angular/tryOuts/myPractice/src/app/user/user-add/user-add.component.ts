import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  form: FormGroup;

  constructor(public formBuild: FormBuilder) {
    this.form = this.formBuild.group({
      name: ['',[Validators.required, Validators.pattern("^[a-zA-Z\s]+$"), Validators.minLength, Validators.maxLength ]]
    })
   }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  onclick(){
    console.log(this.f);
  }
}
