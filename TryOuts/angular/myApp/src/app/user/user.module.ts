import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from '../core/guard/auth.guard';
import { AuthGuardService } from '../core/service/auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthGuardService
  ]
})
export class UserModule { }
