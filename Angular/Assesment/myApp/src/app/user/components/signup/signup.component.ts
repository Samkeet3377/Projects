import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

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
    private authService: AuthService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.eyeIcon = 'eye-slash-fill';
    this.inputType = 'password';

    this.signupForm = formB.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
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

  onSubmit() {
    if (this.signupForm.valid) {
      this.addNewUser();
      this.formReset();
      alert('Signup Succcessfully');
      this.router.navigate(['login'], { relativeTo: this.actRoute.parent });
    } else {
      alert('Error: Something went wrong');
    }
  }
  formReset() { this.signupForm.reset(); }

  addNewUser() {
    this.authService.addUser(this.signupForm.value).subscribe((result) => { });
  }

}
