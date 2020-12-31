import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (this.authenticationService.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authenticationService.token}`
        }
      });
    }

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            if (error.error.code === 'token_not_valid') {
              errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            }
          }
          return throwError(errorMsg);
        })
      );
  }
}
