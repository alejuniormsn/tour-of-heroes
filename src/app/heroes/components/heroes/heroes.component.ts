import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  heroes!: Hero[];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAll().subscribe({
      next: (data) => (this.heroes = data),
      error: (err) => console.error('Observer getAll got an error: ' + err),
      // complete: () => console.log('Complete...'),
    });
  }
}
