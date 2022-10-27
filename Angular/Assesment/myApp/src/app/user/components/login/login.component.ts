import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    formB: FormBuilder,
    private authService: AuthService
  ) {
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
this.authService.getUser().subscribe((res:user[])=>{
  console.log(res);
let user= res.find((user:user)=>{user.email===this.loginForm.controls['email'].value})
console.log(user);


})
  }

  getAllUser() {
    this.authService.getUser().subscribe((result) => { this.userList = result });
  }

}
