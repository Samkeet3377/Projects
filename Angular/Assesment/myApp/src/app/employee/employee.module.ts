import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataShareService } from './service/data-share.service';
import { ToastService } from './service/toast.service';


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
    EmployeeRoutingModule,
    NgSelectModule
  ],
  providers: [
    DataShareService,
    ToastService
  ]
})
export class EmployeeModule { }
