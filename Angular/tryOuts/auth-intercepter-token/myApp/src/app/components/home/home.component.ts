import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/user/service/auth-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName: string = '';
  constructor(
    public authService: AuthApiService
  ) { }

  ngOnInit(): void {

    this.authService.userInfo.subscribe(value => {
      if (value) {
        this.userName = value;
      }
    })

  }

}
