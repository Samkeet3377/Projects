import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onRoute() {
    this.router.navigate(['home'], { relativeTo: this.actRoute.parent })
  }

}
