import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgStyleComponent } from './directive/attribute/ng-style/ng-style.component';
import { HomeComponent } from './home/home.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ngstyle', component: NgStyleComponent },
  { path: 'user-list', component: UserListComponent},
  { path: 'update', component: UserUpdateComponent},
  { path: 'user-add', component: UserAddComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
