import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';
import { OverlayModule } from "@angular/cdk/overlay"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    OverlayModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      "closeButton": true,
      "progressBar": true,
      "timeOut": 3000,
      "extendedTimeOut": 1000,
      "positionClass": "toast-top-center"
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
