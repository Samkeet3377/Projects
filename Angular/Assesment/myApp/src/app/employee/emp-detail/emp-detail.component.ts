import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { emp } from '../model/emp';
import { DataShareService } from '../service/data-share.service';


@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.scss']
})
export class EmpDetailComponent implements OnInit {
  id: any;
  empdata: emp

  constructor(
    public router: Router,
    public actRoute: ActivatedRoute,
    public dataService: DataShareService) {
    this.empdata = new emp

    this.id = ''
    this.actRoute.params.subscribe(res => {
      this.id = res['id'];
      this.getEmpById();
    })
  }

  ngOnInit(): void { }

  getEmpById() {
    this.dataService.getEmpById((this.id)).subscribe(params => {
      this.empdata = params;
    })
  }

  toBack() {
    this.router.navigate(['form'], { relativeTo: this.actRoute.parent })
  }

}
