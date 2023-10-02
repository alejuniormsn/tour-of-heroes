import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from './../../../core/services/hero.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
})
export class HeroCreateComponent {
  constructor(private heroService: HeroService, private fb: FormBuilder) {}

  hero: Hero = { name: '' } as Hero;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
  });

  goBack() {
    this.heroService.goBack();
  }

  create(): void {
    const { value, valid } = this.form;

    console.log(value, valid);

    if (valid) {
      const hero: Hero = {
        name: value.name,
      } as Hero;

      this.heroService.create(hero).subscribe({
        next: () => this.goBack(),
        error: (err) => console.error('Observer getAll got an ' + err),
      });
    } else {
      this.heroService.showErrorMsg();
    }
  }
}
