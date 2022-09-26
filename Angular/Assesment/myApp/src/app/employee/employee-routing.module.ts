import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpFormComponent } from './emp-form/emp-form.component';

import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent,
      children:[
        { path:'', redirectTo:'emp-form', pathMatch:'full' },
        { path:'emp-form', component:EmpFormComponent },
        { path:'emp-detail/:id', component:EmpDetailComponent },
        {path:'list/:id', component:EmpFormComponent }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
