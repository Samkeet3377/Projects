import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStyleComponent } from './ng-style/ng-style.component';



@NgModule({
  declarations: [
    NgStyleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgStyleComponent
  ]
})
export class AttributeModule { }
