import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/share/service/api.service';
import { compony } from '../model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  name: string;
  companyList: compony[];
  constructor(
    public dataService: ApiService
  ) {
    this.name = 'samkeet';
    this.companyList = [];
   }

  ngOnInit(): void { this.getCompanyList();
  }

  getCompanyList(){
    this.dataService.getCompany().subscribe((result)=> {
      this.companyList = result;
    });
  }

}
