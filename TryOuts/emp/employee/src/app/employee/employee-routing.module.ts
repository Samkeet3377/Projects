import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { EmployeeComponent } from './employee.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent,
    children: [
      { path: '', redirectTo: 'form', pathMatch: 'full' },
      { path: 'form', component: FormComponent },
      { path: 'list', component: ListComponent },
      { path: 'detail', component: DetailComponent }
    ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
