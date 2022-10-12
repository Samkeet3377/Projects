import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ApiService } from '../share/service/api.service';


@NgModule({
  declarations: [
    CompanyComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  providers: [
    ApiService
  ]
})
export class CompanyModule { }
