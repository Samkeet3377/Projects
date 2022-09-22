import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmpListComponent,
    EmpFormComponent,
    EmpDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeeRoutingModule
  ],
  // exports: [
  //   EmpFormComponent
  // ],
})
export class EmployeeModule { }
