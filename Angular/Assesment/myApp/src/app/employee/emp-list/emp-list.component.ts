import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataShareService } from 'src/app/employee/service/data-share.service';
import { emp } from '../emp';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

  @Input()  empDetail :emp[]

  // @Output() item: EventEmitter<any> = new EventEmitter
  empList : emp[]

  constructor(
    public router: Router,
    public dataService: DataShareService,
    public actRouter: ActivatedRoute
    ) {
      this.empList = []
      this.empDetail = []
     }

  ngOnInit(): void {

  }

  public getEmpList(): void {
    this.dataService.getEmp().subscribe( (rspns: emp[]) => { this.empDetail = rspns } );
  }

  public userDelete(id:any): void {
    this.dataService.deleteEmp(id).subscribe( ( rspns ) => { this.getEmpList() } );
  }

  public viewUser(id:any): void {
    this.router.navigate(['./detail', + id], { relativeTo: this.actRouter.parent })
  }

  public editUser(id:any): void {
    this.router.navigate(['./list',+id], { relativeTo: this.actRouter.parent });
  }

}
