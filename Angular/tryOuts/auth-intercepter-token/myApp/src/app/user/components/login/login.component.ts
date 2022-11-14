import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from '../../service/auth-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthApiService,
    public router: Router
  ) {
    this.loginForm = formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  userLogin() {
    this.authService.userLogin(this.loginForm.value)
      .subscribe((value) => {
        if (value) {
          alert('success');
          this.router.navigate(['home']);
        } else {
          alert('failed');
        }
      },
        (error) => {
          alert('failed error');
        }
      );
  }

}
