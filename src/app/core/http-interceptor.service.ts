import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer testing-bearer-authrization`
      }
    });
    // return next.handle(request);

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('Auth interceptor err ' , event);
        }
      })
    );
  }
}
