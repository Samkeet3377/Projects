import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      // { path: 'signup', component: SignupComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
