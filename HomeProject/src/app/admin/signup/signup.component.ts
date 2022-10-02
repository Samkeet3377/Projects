import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup

  constructor (
    private formBuild: FormBuilder,
    private dataService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.formBuild.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      // repeatpassword: [''],
    });
  }

  ngOnInit(): void {
  }

  onSignup(data: any): void {
    if(this.signupForm.valid) {
    // console.log(this.signupForm.value);
      this.dataService.addUser(data.value).subscribe((result)=> {
        // console.log(result);
        this.signupForm.reset();
        this.router.navigate(['/login']);
        alert('SignUp Successfully');
      } );
    } else {
      alert('Somthing went wrong!!');
    }

  }

}
