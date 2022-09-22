import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.scss']
})
export class EmpDetailComponent implements OnInit {

  empdata: any

  constructor(public router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParamMap.subscribe(param => this.empdata = param);
  }

}
