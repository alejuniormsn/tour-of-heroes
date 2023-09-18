import { Hero } from '../hero.model';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe({
      next: (data) => (this.heroes = data.slice(0, 4)),
      error: (err) => console.error('Observer got an error: ' + err),
      // complete: () => console.log('Complete...'),
    });
  }
}
