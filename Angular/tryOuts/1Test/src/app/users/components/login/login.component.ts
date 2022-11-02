import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  eyeIcon: string;
  buttonType: string;

  constructor() {
    this.eyeIcon = 'eye-slash';
    this.buttonType = 'password';
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
