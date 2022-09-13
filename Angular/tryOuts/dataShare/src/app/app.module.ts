import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDataComponent } from './myData/view-data/view-data.component';
import { UserlistComponent } from './myData/userlist/userlist.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddUserComponent } from './myData/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewDataComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UserlistComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
