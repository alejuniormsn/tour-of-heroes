import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from './../../../core/services/hero.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
})
export class HeroCreateComponent {
  constructor(private heroService: HeroService) {}

  hero: Hero = { name: '' } as Hero;

  goBack() {
    this.heroService.goBack();
  }

  create(): void {
    this.heroService.create(this.hero.name).subscribe({
      next: () => this.goBack(),
      error: (err) =>
        console.error('Observer create hero got an error: ' + err),
    });
  }
}
