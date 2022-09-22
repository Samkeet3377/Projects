import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent,
      children: [
        { path: '', pathMatch: 'full', redirectTo: 'emp-form'},
        { path: 'emp-detail', component: EmpDetailComponent },
        // { path: 'emp-list', component: EmpListComponent },
        { path: 'emp-form', component: EmpFormComponent }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
