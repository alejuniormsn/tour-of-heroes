import { MessageService } from './../services/message.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        let errorMsg = '';

        console.log(err);

        if (err.error instanceof ErrorEvent) {
          errorMsg = err.error.message;
        } else {
          errorMsg = `${err.statusText}, Code: ${err.status}, ${err.url}`;
        }

        this.messageService.add(errorMsg);

        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
