import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './core/guard/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
