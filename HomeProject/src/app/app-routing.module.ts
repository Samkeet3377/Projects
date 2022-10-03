import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'home', component: HomeComponent },
  { path:'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }