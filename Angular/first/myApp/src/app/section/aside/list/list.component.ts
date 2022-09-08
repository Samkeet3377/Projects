import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  users = [
    { name: 'samkeet', id: 1, sname: 'kevat' },
    { name: 'ravi', id: 2, sname: 'singh' },
    { name: 'kapil', id: 3, sname: 'kuntal' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
