import { Component, OnInit } from '@angular/core';
import { bike, car } from 'src/app/modules/product/model/model';
import { ApiService } from 'src/app/modules/share/service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  bikesData: bike[];
  carsData: car[];

  constructor(
    private bikeService: ApiService,
    private carService: ApiService
  ) {
    this.bikesData = [];
    this.carsData = [];
  }

  ngOnInit(): void {
    // this.getBikes();
    // this.getCars();
  }

  public getBikes(): void {
    this.bikeService.getBikes().subscribe((result: bike[]) => {
      this.bikesData = result;
    });
  }

  public getCars(): void {
    this.carService.getCars().subscribe((result: car[]) => {
      this.carsData = result;
    });
  }


}
