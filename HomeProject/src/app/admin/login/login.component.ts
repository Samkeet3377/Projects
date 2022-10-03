import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  type: String;
  isText: Boolean;
  eyeIcon: String;
  userIsAuthenticated: Boolean;

  constructor(
    private formBuild: FormBuilder,
    private dataService: AuthService,
    private router: Router
    ) {
    this.loginForm = this.formBuild.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.type = 'password';
    this.isText = false;
    this.eyeIcon = 'bi-eye-slash';
    this.userIsAuthenticated = false;
   }

  ngOnInit(): void {
  }

  passHideShow() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'bi-eye' : this.eyeIcon = 'bi-eye-slash';
    this.isText ? this.type = 'text' : this.type = 'password';
  }

  onLogin() {

    if(this.loginForm.valid) {
    //   console.log(this.loginForm.value);
        this.dataService.getUser().subscribe((result)=> {
          const user = result.find((u:any)=> {
            return u.email === this.loginForm.value.email && u.password === this.loginForm.value.password
          });
          if(user) {
            this.userIsAuthenticated = true;
            alert('Login Successfully');
            this.loginForm.reset();
            this.router.navigate(['/home']);
          } else {
            alert('User Not Registered');
            this.userIsAuthenticated = false;
          }
        });
    } else {
      console.log('Invalid Form');

    }
  }

}
