import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { AuthGuardService } from "../service/auth-guard.service";
import { Observable } from "rxjs";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthGuardService
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken();
    req = req.clone({
      setHeaders: { authorization: 'Bearer' + authToken },
    });
    return next.handle(req);
  }

}
