import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  eyeIcon: string;
  buttonType: string;

  loginForm: FormGroup;

  constructor(
    formBUilder: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) {
    this.eyeIcon = 'eye-slash';
    this.buttonType = 'password';

    this.loginForm = formBUilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
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

  onLogin() {
    this.authService.signIn(this.loginForm.value)
  }

}
