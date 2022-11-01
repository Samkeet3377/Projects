import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OverlayService } from 'src/app/shared/service/overlay.service';
import { ProfileComponent } from 'src/app/users/components/profile/profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isOpen: boolean;

  constructor(private overlayService: OverlayService,
    private overlay: Overlay
  ) {
    this.isOpen = false;
  }

  ngOnInit(): void {
  }

  openOverlay() {
    this.overlayService.open(ProfileComponent)
  }
  backClick() {
  }
}
