import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../../model/user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  eyeIcon: string;
  inputType: string;

  loginForm: FormGroup;
  userList: user[];
  public data: boolean;

  constructor(
    private route: Router,
    public formB: FormBuilder,
    private authService: AuthService
  ) {
    this.data = false;
    this.eyeIcon = 'eye-slash-fill';
    this.inputType = 'password';

    this.userList = [];

    this.loginForm = formB.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {

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

  onLogin() {
    // console.log('clicked');

    this.authService.getUser().subscribe((res) => {
      let findUser = res.find((user: user) => (user.email === this.loginForm.value.email && user.password === this.loginForm.value.password));
      if (findUser) {
        this.route.navigate(['home']);
        localStorage.setItem('isAuth', 'true');
        const role = findUser.role;
        localStorage.setItem('role', role);
        // this.loginForm.reset();
      } else {
        alert('you are unregistered user');
      }
    });

  }

}
