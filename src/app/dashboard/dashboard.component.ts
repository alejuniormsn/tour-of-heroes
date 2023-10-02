import { Hero } from '../core/models/hero.model';
import { HeroService } from '../core/services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getAll().subscribe({
      next: (data) => (this.heroes = data.slice(0, 4)),
      error: (err) => console.error('Observer getAll got an ' + err),
      // complete: () => console.log('Complete...'),
    });
  }
}
