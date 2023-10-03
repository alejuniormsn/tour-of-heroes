import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from 'src/app/core/models/dialog-data.model';
import { ConfirmationDialogComponent } from 'src/app/core/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private dialog: MatDialog) {}

  heroes!: Hero[];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAll().subscribe({
      next: (data) => (this.heroes = data),
      error: (err) => console.error('Observer getAll got an ' + err),
      // complete: () => console.log('Complete...'),
    });
  }

  delete(hero: Hero): void {
    const dialogData: DialogData = {
      cancelText: 'Cancel',
      confirmText: 'Delete',
      content: `Delete '${hero.name}'?`,
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: dialogData,
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.heroService.delete(hero).subscribe({
          next: () => this.getHeroes(), //(this.heroes = this.heroes.filter((item) => item !== hero)),
          error: (err) => console.error('Observer getAll got an ' + err),
        });
      }
    });
  }

  onSelected(hero: Hero): void {
    this.delete(hero);
  }
}
