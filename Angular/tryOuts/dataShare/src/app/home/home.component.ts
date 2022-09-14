import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tgl_directive : Boolean
  constructor() {
    this.tgl_directive = false
   }

  ngOnInit(): void {
  }

}
