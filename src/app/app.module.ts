import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesListModule } from './movies-list/movies-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MoviesListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
