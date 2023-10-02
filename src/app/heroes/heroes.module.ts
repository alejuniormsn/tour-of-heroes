import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroCreateComponent } from './components/hero-create/hero-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroesComponent, HeroDetailsComponent, HeroCreateComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class HeroesModule {}
