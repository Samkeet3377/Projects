import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './modules/core/core.module';
import { HomeComponent } from './component/home/home.component';
import { ProductModule } from './modules/product/product.module';
import { AdminModule } from './modules/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    // ProductModule,
    // AdminModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
