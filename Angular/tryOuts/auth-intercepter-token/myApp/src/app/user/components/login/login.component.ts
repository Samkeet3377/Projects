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
    public authService: AuthApiService,
    public router: Router
  ) {
    this.loginForm = formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((userData: any) => {
        this.loginForm.reset();
        this.router.navigate(['/home']);
      });
    }
  }

}
