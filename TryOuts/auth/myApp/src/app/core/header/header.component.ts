import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../service/auth-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthGuardService
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.doLogout();
  }

}
