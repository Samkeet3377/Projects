import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { emp } from '../emp';
import { DataShareService } from '../service/data-share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  @Input()  empDetail :any=[]
  // empDetail: emp [] = []
  @Output() item: EventEmitter<any> = new EventEmitter
  // private dataShareSevice: DataShareService, private http: HttpClient


  constructor( public router: Router ) {

    }

  ngOnInit(): void {

    // this.dataShareSevice.getEmp().subscribe( (rspns:any) => { this.empDetail = rspns }, (error:any) => console.log("Error: "+error) );
  }

  onDelete(data:any) {
    if(this.empDetail.indexOf(data) !== -1 ) {
      this.empDetail.splice(this.empDetail.indexOf(data),1);
    }
    // this.empDetail = this.empDetail.filter( (data2:any) => data.name !== data2.name );
    // this.empDetail.splice(data,1);
  }

  view(emp:any) {
    this.router.navigate(['employee/emp-detail'], { queryParams: emp });
    // , { queryParams: { page:JSON.parse(this.empDetail) } })
  }

}
