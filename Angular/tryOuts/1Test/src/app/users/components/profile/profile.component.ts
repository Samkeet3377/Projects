import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api/api.service';
import { testPostScroll } from '../../model/testModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public OTP!: string;

  public page: number;
  public posts: testPostScroll[];
  constructor(
    private postApiService: ApiService
  ) {
    this.page = 1;
    this.posts = [];
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postApiService.getPosts(this.page).subscribe((result: testPostScroll[]) => {
      this.posts = result;
    });
  }

  onScroll(): void {
    this.postApiService.getPosts(++this.page).subscribe((result: testPostScroll[]) => {
      return this.posts.push(...result);
    });
    // this.page++
    this.getPosts();
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
