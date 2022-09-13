import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent implements OnInit {

  users:any []
  constructor() {
    this.users = [
      { id:1, name: 'samkeet', sname: 'kevat', active: true },
      { id:2, name: 'kapil', sname: 'kuntal', active: true },
      { id:3, name: 'raj', sname: 'patel', active: true }
    ]
   }

  ngOnInit(): void {
  }

  dltUser(event:number) {
    this.users.forEach((value,index_id)=>{
      if(value.id==event) this.users.splice(index_id,1);
    });
  }

}
