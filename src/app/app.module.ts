import { ContentChild, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ContadorModule } from './contador/contador.module';
// import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { HeroesModule } from './heroes/heroes.module';
import { ListadoComponent } from './heroes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
