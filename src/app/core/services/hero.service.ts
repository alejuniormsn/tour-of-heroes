import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Observable, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private heroesUrl = `${environment.baseUrl}/heroes`;

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(
        tap((heroes) =>
          this.messageService.add(
            `HeroesService: fetched ${heroes.length} hero(es)`
          )
        )
      );
  }

  getHero(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(
        tap((hero) =>
          this.messageService.add(
            `HeroesService: fetched hero id = ${hero.id} and hero name = ${hero.name}`
          )
        )
      );
  }
}
