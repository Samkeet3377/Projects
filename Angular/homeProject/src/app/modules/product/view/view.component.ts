import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../share/service/api.service';
import { bikeInfo } from '../model/model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public bikeInfo: bikeInfo[];

  constructor(
    private bikeInfoService: ApiService
  ) {
    this.bikeInfo = [];
  }

  ngOnInit(): void {
    this.getTVSBikeInfo();
  }

  getTVSBikeInfo() {
    this.bikeInfoService.getBikesData().subscribe((result) => {
      this.bikeInfo = result;
    });
  }

}
