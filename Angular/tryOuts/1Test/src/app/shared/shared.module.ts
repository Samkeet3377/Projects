import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { TestComponent } from './components/test/test.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipe/search.pipe';
import { HomeComponent } from './components/home/home.component';
import { ApiService } from './service/api/api.service';
import { AuthInterceptor } from './service/auth/interceptor/interceptor';


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
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
