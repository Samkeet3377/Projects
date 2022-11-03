import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/modules/share/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public shortLink: string;
  public loading: boolean;
  public file?: File;

  constructor(
    private imageService: ApiService
  ) {
    this.shortLink = '';
    this.loading = false;
    // this.file? = null;
  }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.imageService.uploadImage(this.file).subscribe((result: any) => {
      if (typeof (result) === 'object') {
        this.shortLink = result.link;
        this.loading = false;
      }
    });
  }
}
