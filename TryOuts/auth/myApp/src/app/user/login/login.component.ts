import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from 'src/app/service/api/auth-guard.service';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  eyeIcon: any;
  inputType: string;
  userData: any;
  loginForm: FormGroup;
  constructor(
    private authService: AuthGuardService,
    formB: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.eyeIcon = 'eye-slash-fill';
    this.inputType = 'password';
    this.userData = [];

    this.loginForm = formB.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
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
    this.authService.getUser().subscribe((result: any) => {
      this.userData = result[0];
      console.log(this.userData);
      localStorage.setItem('email', this.userData.email);
      localStorage.setItem('password', this.userData.password);
    });
  }

  onLogin() {
    if (this.loginForm.value.email === this.userData.email && this.loginForm.value.password === this.userData.password) {
      this.router.navigate(['user']);
    } else {
      alert('You are not register User. Please SignUp first');
      this.router.navigate(['signup'], { relativeTo: this.actRoute.parent });
    }
  }

}
