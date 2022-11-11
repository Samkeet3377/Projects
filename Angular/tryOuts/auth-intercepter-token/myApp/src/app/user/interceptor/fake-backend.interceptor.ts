import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthApiService } from '../service/auth-api.service';

export const FAKE_JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJzYW1rZWV0IiwibGFzdE5hbWUiOiJrZXZhdCIsImVtYWlsIjoic2Fta2VldEBlbWFpbC5jb20iLCJwYXNzd29yZCI6MTIzNDU2NzgsInBob25lTnVtYmVyIjoxMjM0NTY3ODkwLCJjb3VudHJ5IjoiaW5kaWEiLCJzdGF0ZSI6Imd1amFyYXQiLCJjaXR5IjoiYmlsaW1vcmEiLCJ0eXBlIjoiZ2VuZXJhbC11c2VyIn0.ximgwYKcDfMYmEB20nH6bZj3HjfOOnjj5ZvMo_et2LI';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthApiService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      headers: request.headers.set('authorization', 'token')
    });

    const { url, method, headers } = request;
    if (url.endsWith('login') && method === 'POST') {
      isLoggedIn();
      return handleLogin();
    }
    return next.handle(request);

    function isLoggedIn() {
      return headers.get('authorization') === FAKE_JWT_TOKEN;
    }

    function handleLogin(): Observable<HttpEvent<unknown>> {
      return of(
        new HttpResponse({
          status: 200,
          body: {
            id: '1',
            username: 'samkeet',
            token: FAKE_JWT_TOKEN,
          },
        })
      );
    }

  }
}

export const FakeBackendProvider = {
  // provide: HTTP_INTERCEPTORS,
  // useClass: FakeBackendInterceptor,
  // multi: true,
};
