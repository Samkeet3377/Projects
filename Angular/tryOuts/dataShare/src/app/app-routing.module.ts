import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeComponent } from './directive/attribute/attribute.component';
import { StructureComponent } from './directive/structure/structure.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'attribute', component:AttributeComponent },
  { path:'structure', component:StructureComponent },

  { path:'', pathMatch:'full',redirectTo:'home' },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
