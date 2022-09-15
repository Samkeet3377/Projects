import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './myLayoutComponents/header/header.component';
import { FooterComponent } from './myLayoutComponents/footer/footer.component';
import { AsideComponent } from './myLayoutComponents/aside/aside.component';
import { AttributeModule } from './directive/attribute/attribute.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AttributeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
