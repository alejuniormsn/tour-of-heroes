import { HeroService } from '../core/services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../core/models/hero.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  hero!: Hero;

  ngOnInit(): void {
    this.getHero();
  }

  goBack() {
    this.location.back();
  }

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe({
      next: (data) => (this.hero = data),
      error: (err) => console.error('Observer got an error: ' + err),
      // complete: () => console.log('Complete...'),
    });
  }
}
