import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './copmonent/header/header.component';
import { FooterComponent } from './copmonent/footer/footer.component';
import { HomeComponent } from './copmonent/home/home.component';
import { ContactComponent } from './copmonent/contact/contact.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
