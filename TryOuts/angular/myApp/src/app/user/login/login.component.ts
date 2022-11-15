import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../core/service/auth-guard.service';
import { user } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  eyeIcon: string;
  inputType: string;

  public userData: user[];
  loginForm: FormGroup;

  public isAuth: string;

  constructor(
    private authService: AuthGuardService,
    formB: FormBuilder,
    private router: Router
  ) {
    this.eyeIcon = 'eye-slash-fill';
    this.inputType = 'password';

    this.userData = [];
    this.isAuth = '';

    this.loginForm = formB.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getUserData();
  }

  iconChage() {
    if (this.eyeIcon !== 'eye-fill') {
      this.eyeIcon = 'eye-fill';
      this.inputType = 'text';
    } else {
      this.eyeIcon = 'eye-slash-fill';
      this.inputType = 'password';
    }
  }

  getUserData() {
    this.authService.getUser().subscribe((user: user[]) => {
      this.userData = user;
    });
  }

  onLogin() {
    this.authService.signIn(this.loginForm.value);
  }

}
