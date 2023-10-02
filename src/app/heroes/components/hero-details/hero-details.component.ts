import { HeroService } from '../../../core/services/hero.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../../core/models/hero.model';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogData } from 'src/app/core/models/dialog-data.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/core/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
})
export class HeroDetailsComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  hero!: Hero;

  form = this.fb.group({
    id: [{ value: '', disabled: true }],
    name: ['', [Validators.required, Validators.minLength(3)]],
  });

  ngOnInit(): void {
    this.getOne();
  }

  goBack() {
    this.heroService.goBack();
  }

  getOne(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getOne(id).subscribe({
      next: (data) => {
        this.hero = data;
        this.form.controls['id'].setValue(data.id.toString());
        this.form.controls['name'].setValue(data.name.toString());
      },
      error: (err) => console.error('Observer getAll got an ' + err),
      // complete: () => console.log('Complete...'),
    });
  }

  update(): void {
    const { value, valid } = this.form;

    if (valid) {
      const hero: Hero = {
        id: this.hero.id,
        name: value,
      } as Hero;

      this.heroService.update(hero).subscribe({
        next: () => this.goBack(),
        error: (err) => console.error('Observer getAll got an ' + err),
      });
    } else {
      this.heroService.showErrorMsg();
    }
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
        this.heroService.delete(this.hero).subscribe({
          next: () => this.goBack(),
          error: (err) => console.error('Observer getAll got an ' + err),
        });
      }
    });
  }
}
