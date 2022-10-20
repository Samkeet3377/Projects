import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/service/api/auth-guard.service';
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
    if (this.loginForm.valid) {

      const tempData: any = this.userData.find((test: user) => test.email == this.loginForm.value.email);
      if (tempData.password == this.loginForm.value.password) {

        this.isAuth = 'true';
        this.authService.auth.next(this.isAuth);
        this.router.navigate(['home']);

        localStorage.setItem('user',tempData.username);

      } else {
        alert('You are not register User. Please SignUp first');
        this.isAuth = 'false';
        this.authService.auth.next(this.isAuth);
        this.router.navigate(['signup']);
      }

    }
  }

}
