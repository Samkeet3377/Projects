import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api/api.service';
import { users } from '../../model/userModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public OTP!: string;

  public usersData: users[];

  public type = [
    { id: 1, type: 'Recording' },
    { id: 2, type: 'Jamming' },
    { id: 3, type: 'Mixing' }
  ];

  constructor(
    private userSevice: ApiService
  ) {
    this.usersData = [];
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userSevice.getAllUsers().subscribe((result) => { this.usersData = result });
  }

  generateOTP() {
    let digits = '0123456789';
    let otp = '';
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    this.OTP = otp;
    return otp;
  }

}
