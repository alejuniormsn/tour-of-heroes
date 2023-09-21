import { HeroService } from '../../../core/services/hero.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../../core/models/hero.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
})
export class HeroDetailsComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  hero!: Hero;

  ngOnInit(): void {
    this.getOne();
  }

  goBack() {
    this.heroService.goBack();
  }

  getOne(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getOne(id).subscribe({
      next: (data) => (this.hero = data),
      error: () => this.goBack(),
      // complete: () => console.log('Complete...'),
    });
  }

  update(): void {
    this.heroService.update(this.hero).subscribe({
      next: () => this.goBack(),
      error: (err) =>
        console.error('Observer update hero got an error: ' + err),
    });
  }

  delete(): void {
    this.heroService.delete(this.hero).subscribe({
      next: () => this.goBack(),
      error: (err) =>
        console.error('Observer update hero got an error: ' + err),
    });
  }
}
