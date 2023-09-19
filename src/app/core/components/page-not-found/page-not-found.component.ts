import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div>
      <mat-card>
        <mat-card-header>
          <mat-card-title>404: Page Not Found</mat-card-title>
        </mat-card-header>
        <img matCardImage src="../../../../assets/page-not-found.jpg" />
        <mat-card-actions fxLayoutAlign="center" style="margin-bottom: 16px;">
          <button mat-raised-button color="primary" routerLink="/">
            Take Me Home
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
})
export class PageNotFoundComponent {}
