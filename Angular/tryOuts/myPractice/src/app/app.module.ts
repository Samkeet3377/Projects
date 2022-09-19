import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AttributeModule } from './directive/attribute/attribute.module';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    UserUpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AttributeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
