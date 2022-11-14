import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('role');

    this.route.navigate(['login']);
  }

}
