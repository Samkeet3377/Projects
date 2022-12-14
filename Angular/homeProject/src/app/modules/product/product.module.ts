import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { BikeComponent } from './bike/bike.component';
import { CarComponent } from './car/car.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    ProductComponent,
    BikeComponent,
    CarComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,

  ]
})
export class ProductModule { }
