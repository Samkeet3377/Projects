import { Component } from '@angular/core';
import { AuthApiService } from './user/service/auth-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';

  constructor(
    public authService: AuthApiService
  ) { }

}
