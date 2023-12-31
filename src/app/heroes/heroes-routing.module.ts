import { HeroCreateComponent } from './components/hero-create/hero-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
  },
  {
    path: 'add',
    component: HeroCreateComponent,
  },
  {
    path: ':id',
    component: HeroDetailsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
