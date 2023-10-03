import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private location: Location,
    private messageService: MessageService,
    private snack: MatSnackBar
  ) {}

  private heroUrl = `${environment.baseUrl}/heroes`;

  goBack(): void {
    this.location.back();
  }

  showErrorMsg(msg?: string): void {
    this.snack.open(msg ? msg : 'Please check the form for errors.', 'OK', {
      duration: 2500,
      verticalPosition: 'top',
    });
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

  search(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http
      .get<Hero[]>(`${this.heroUrl}?name=${term}`)
      .pipe(
        tap((heroes) =>
          heroes.length
            ? this.messageService.add(
                `HeroesService: found ${heroes.length} hero(es) matching "${term}"`
              )
            : this.messageService.add(
                `HeroesService: no heroes matching "${term}"`
              )
        )
      );
  }

  update(hero: Hero): Observable<Hero> {
    return this.http
      .put<Hero>(`${this.heroUrl}/${hero.id}`, hero.name)
      .pipe(
        tap((hero) =>
          this.messageService.add(
            `HeroesService: updated hero id = ${hero.id} name = ${hero.name}.`
          )
        )
      );
  }

  create(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(`${this.heroUrl}`, { name: hero.name })
      .pipe(
        tap((hero) =>
          this.messageService.add(
            `HeroesService: create hero id = ${hero.id} name = ${hero.name}.`
          )
        )
      );
  }

  delete(hero: Hero): Observable<any> {
    return this.http
      .delete<any>(`${this.heroUrl}/${hero.id}`)
      .pipe(
        tap(() =>
          this.messageService.add(
            `HeroesService: delete hero id = ${hero.id} name = ${hero.name}.`
          )
        )
      );
  }
}
