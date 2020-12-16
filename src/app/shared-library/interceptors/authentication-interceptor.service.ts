import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { AuthenticationService } from "../services/authentication.service";
import { catchError, filter, finalize, switchMap, take } from "rxjs/operators";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.token) {
      console.log("Add Authorization Header")
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
            console.log('this is client side error');
            errorMsg = `Error: ${error.error.message}`;
          } else {
            if (error.error.code === "token_not_valid") {
              console.log('this is server side error', error, error.error.code, error.error.messages);
              errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            }

          }
          // console.log(errorMsg);
          return throwError(errorMsg);
        })
      )

    // return next.handle(request);

  }


}
