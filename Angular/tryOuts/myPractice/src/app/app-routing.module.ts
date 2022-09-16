import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgStyleComponent } from './directive/attribute/ng-style/ng-style.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ngstyle', component: NgStyleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
