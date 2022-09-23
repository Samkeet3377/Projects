import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/employee/service/data-share.service';
import { emp } from '../emp';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

  @Input()  empDetail :emp[]

  @Output() item: EventEmitter<any> = new EventEmitter
  // empList : emp[] = []

  constructor( public router: Router,
            public dataService: DataShareService
    ) {
      this.empDetail=[]
     }

  ngOnInit(): void {

  }

  userDelete(id:any): void {
    this.dataService.deleteEmp(id).subscribe( ( rspns ) => { this.getEmpList() } );
  }

  // onDelete(data:any) {
  //   if(this.empDetail.indexOf(data) !== -1 ) {
  //     this.empDetail.splice(this.empDetail.indexOf(data),1);
  //   }

  // }
  private getEmpList(): void {
    this.dataService.getEmp().subscribe( (rspns: emp[]) => { this.empDetail = rspns } );
  }
  view(emp:any) {
    this.router.navigate(['employee/emp-detail'], { queryParams: emp });
  }

}
