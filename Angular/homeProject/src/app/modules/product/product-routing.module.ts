import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeComponent } from './bike/bike.component';
import { CarComponent } from './car/car.component';
import { ProductComponent } from './product.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: ProductComponent,
  children: [
    { path:'product', component: ProductComponent },
    { path: 'bike', component: BikeComponent },
    { path: 'car', component: CarComponent },
    { path: 'view', component: ViewComponent }
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
