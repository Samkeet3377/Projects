import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/service/api/auth-guard.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  eyeIcon: string;
  inputType: string;

  signupForm: FormGroup

  constructor(
    formB: FormBuilder,
    private authService: AuthGuardService,
    private router: Router
  ) {
    this.eyeIcon = 'eye-slash-fill';
    this.inputType = 'password';

    this.signupForm = formB.group({
      username: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
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

  onSubmit(){
    this.addNewUser();
  }

  addNewUser() {
    if(this.signupForm.valid) {
      this.authService.addUser(this.signupForm.value).subscribe((result)=> {
        this.reset();
        this.router.navigate(['login']);
      });
    }
    else {
      alert('Invalid');
    }
  }

  reset(){
    this.signupForm.reset();
  }

}
