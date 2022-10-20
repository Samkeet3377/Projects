import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class ToastService {

  constructor(
    public toaster: ToastrService
  ) { }

  onSuccess(msg: string, title: string) {
    this.toaster.success(msg, title)
  }
  onInfo(msg: string, title: string) {
    this.toaster.success(msg, title)
  }
  onWarning(msg: string, title: string) {
    this.toaster.success(msg, title)
  }
}
