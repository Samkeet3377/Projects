import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureComponent } from './structure/structure.component';
import { AttributeComponent } from './attribute/attribute.component';



@NgModule({
  declarations: [
    StructureComponent,
    AttributeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
