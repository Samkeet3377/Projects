import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataShareService } from 'src/app/employee/service/data-share.service';
import { emp } from '../model/emp';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

  @Input() empDetail: emp[];

  @Output() empData: EventEmitter<emp>
  empList: emp[];
  tempRole: any;

  constructor(
    public router: Router,
    public dataService: DataShareService,
    public actRouter: ActivatedRoute,
    public toaster: ToastService
  ) {
    this.empList = [];
    this.tempRole = [];
    this.empDetail = [];
    this.empData = new EventEmitter();
  }

  ngOnInit(): void {
    this.getEmpList();
  }

  public getEmpList(): void {
    this.dataService.getEmp().subscribe((rspns: emp[]) => {
      this.empList = rspns;
    });
  }

  public userDelete(data: any): void {
    this.dataService.deleteEmp(data.id).subscribe((rspns) => {
      this.getEmpList();
      alert('Are you Sure? to Delete ' + data.name + ' Employee');
      this.toastWarning();
    });
  }

  public viewUser(id: any): void {
    this.router.navigate(['./detail', + id], { relativeTo: this.actRouter.parent })
  }

  public editUser(empData: emp): void {
    this.empData.emit(empData);
    this.router.navigate(['./list', + empData.id], { relativeTo: this.actRouter.parent });
  }

  public toastWarning() {
    this.toaster.onWarning('Employee Deleted Successfully', 'Message');
  }

  //test destructure JSON


}
