import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { Chil2Component } from './chil2/chil2.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  { path: 'child', component: ChildComponent },
  { path: 'chil2', component: Chil2Component },
  // { path: 'app', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
