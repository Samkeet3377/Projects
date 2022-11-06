import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { TestComponent } from './components/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipe/search.pipe';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    TestComponent,
    SearchPipe,
    HomeComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    TestComponent
  ]
})
export class SharedModule { }
