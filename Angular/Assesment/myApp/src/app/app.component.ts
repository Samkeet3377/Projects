import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myApp';

  public visible: boolean;
  constructor(
    private authService: AuthService
  ) {
    this.visible = false;
  }

  ngOnInit(): void {
    this.authService.visibleBS.subscribe((result) => {
      this.visible = result;
    });
  }

}
