import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Observable, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private location: Location,
    private messageService: MessageService
  ) {}

  private heroUrl = `${environment.baseUrl}/heroes`;

  goBack(): void {
    this.location.back();
  }

  getAll(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroUrl)
      .pipe(
        tap((heroes) =>
          this.messageService.add(
            `HeroesService: fetched ${heroes.length} hero(es).`
          )
        )
      );
  }

  getOne(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.heroUrl}/${id}`)
      .pipe(
        tap((hero) =>
          this.messageService.add(
            `HeroesService: fetched hero id = ${hero.id} name = ${hero.name}.`
          )
        )
      );
  }

  update(hero: Hero): Observable<Hero> {
    return this.http
      .put<Hero>(`${this.heroUrl}/${hero.id}`, hero)
      .pipe(
        tap((hero) =>
          this.messageService.add(
            `HeroesService: updated hero id = ${hero.id} name = ${hero.name}.`
          )
        )
      );
  }

  create(hero: string): Observable<Hero> {
    return this.http
      .post<Hero>(`${this.heroUrl}`, { name: hero })
      .pipe(
        tap((hero) =>
          this.messageService.add(
            `HeroesService: create hero id = ${hero.id} name = ${hero.name}.`
          )
        )
      );
  }

  delete(hero: Hero): Observable<Hero> {
    return this.http
      .delete<Hero>(`${this.heroUrl}/${hero.id}`)
      .pipe(
        tap(() =>
          this.messageService.add(
            `HeroesService: delete hero id = ${hero.id} name = ${hero.name}.`
          )
        )
      );
  }
}
