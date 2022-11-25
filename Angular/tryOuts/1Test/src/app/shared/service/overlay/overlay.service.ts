import { Injectable } from '@angular/core';
import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { auto } from '@popperjs/core';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class OverlayService {

  constructor(private overLay: Overlay) { }

  open<T>(component: ComponentType<T>) {
    const position = this.overLay.position().global().right();

    const overlayRef = this.overLay.create({
      positionStrategy: position, hasBackdrop: true, backdropClass: 'overlay-backdrop', panelClass: 'overlay-panel', height: auto, width: 500,
    });

    const portal = new ComponentPortal(component);
    overlayRef.attach(portal);

    overlayRef.backdropClick().subscribe(() => { overlayRef.detach(); });
  }

}
