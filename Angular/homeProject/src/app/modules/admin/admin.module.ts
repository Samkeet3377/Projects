import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './dashboard/product/product.component';
import { ApiService } from '../share/service/api.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [
    ApiService
  ]
})
export class AdminModule { }
