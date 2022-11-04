import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { OverlayService } from '../shared/service/overlay/overlay.service';
import { UsersModule } from '../users/users.module';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    OverlayModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    OverlayService
  ]
})
export class CoreModule { }
