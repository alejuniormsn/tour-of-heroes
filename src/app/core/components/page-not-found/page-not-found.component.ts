import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>404: Page Not Found</mat-card-title>
      </mat-card-header>
      <img matCardImage src="../../../../assets/page-not-found.jpg" />
      <mat-card-content> We couldn't find that page!</mat-card-content>
      <mat-card-actions fxLayoutAlign="center" style="margin-bottom: 16px;">
        <button mat-raised-button color="primary" routerLink="/">
          Take Me Home
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      :host {
        text-align: center;
      }
    `,
  ],
})
export class PageNotFoundComponent {}
