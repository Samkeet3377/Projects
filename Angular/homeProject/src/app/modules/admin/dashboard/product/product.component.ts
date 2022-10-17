import { Component, OnInit } from '@angular/core';
import { bike, car } from 'src/app/modules/product/model/model';
import { ApiService } from 'src/app/modules/share/service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.getBikes();
    // this.getCars();
  }

}
