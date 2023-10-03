import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HeroSearchComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeroSearchComponent],
})
export class SharedModule {}
