import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './service/guard/auth.guard';

const routes: Routes = [
  // {path:'',redirectTo:'user',pathMatch:'full'},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
