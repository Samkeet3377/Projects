import { Component, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/shared/service/overlay/overlay.service';
import { ProfileComponent } from 'src/app/users/components/profile/profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isOpen: boolean;

  constructor(
    private overlayService: OverlayService,
  ) {
    this.isOpen = false;
  }

  ngOnInit(): void {
  }

  openOverlay() {
    this.overlayService.open(ProfileComponent)
  }

}
