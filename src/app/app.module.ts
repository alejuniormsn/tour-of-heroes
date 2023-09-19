import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, DashboardModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
