import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  eyeIcon: string;
  buttonType: string;

  public file!: File;
  base64: any;
  public imagePath: any;
  imageName: any;

  signupForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private domSanitizer: DomSanitizer,
    private actRouter: ActivatedRoute,
  ) {
    this.eyeIcon = 'eye-slash';
    this.buttonType = 'password';

    this.signupForm = formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3), Validators.maxLength(25)]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}$'), Validators.minLength(8), Validators.maxLength(25)]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$@!_&]).{8,30}$'), Validators.minLength(8), Validators.maxLength(30)]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^(?=.*?[0-9]).{10,10}$'), Validators.minLength(10), Validators.maxLength(10)]],
      address: formBuilder.group({
        country: ['', [Validators.required]],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
      }),
      type: ['', [Validators.required]],
      imagePath: [''],
      imageName: ['']
    });

  }

  ngOnInit(): void {
    this.actRouter.data.subscribe(res => {
      this.signupForm.patchValue(res['company']);
      this.imagePath = this.domSanitizer.bypassSecurityTrustResourceUrl(this.signupForm.get('imagePath')?.value);
      this.imageName = this.domSanitizer.bypassSecurityTrustResourceUrl(this.signupForm.get('imageName')?.value);
    });
  }

  changeIcon() {
    if (this.eyeIcon === 'eye-slash') {
      this.eyeIcon = 'eye';
      this.buttonType = 'text';
    } else {
      this.eyeIcon = 'eye-slash';
      this.buttonType = 'password';
    }
  }

  onSelectFile(event: any) {
    if (event.target.files[0].length > 0) {
      this.file = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.file);
      fileReader.onload = () => {
        this.base64 = String(fileReader.result);
        this.imagePath = this.domSanitizer.bypassSecurityTrustResourceUrl(this.base64);
      }
    }

  }
}
