import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  eyeIcon: string;
  buttonType: string;

  signupForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.eyeIcon = 'eye-slash';
    this.buttonType = 'password';

    this.signupForm = formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3), Validators.maxLength(25)]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3), Validators.maxLength(25)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address: formBuilder.group({
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
      }),
      type: ['', [Validators.required]],
      image: [],
    });

  }

  ngOnInit(): void {
  }

  changeIcon() {
    if (this.eyeIcon === 'eye-slash') {
      this.eyeIcon = 'eye';
      this.buttonType = 'text';
    } else {
      this.eyeIcon = 'eye-slash';
      this.buttonType = 'password';
    }
  }

}
