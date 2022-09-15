import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {
blue:any='gray';
  list: any[]
  public constructor() {
    this.list = [
      { name: 'samkeet', city: 'bilimora' },
      { name: 'kapil', city: 'valsad' },
      { name: 'ravi', city: 'umargam' },
      { name: 'amresh', city: 'daman' }
    ];
   }

  ngOnInit(): void {
  }

  getColor(city:any) {
    switch (city) {
      case 'bilimora' :
        return 'blue';
      case 'valsad' :
        return 'red';
      case 'umargam' :
        return 'aqua';
      default :
        return 'green';
    }
  }

}
