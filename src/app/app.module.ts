import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesListModule } from './movies-list/movies-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, MoviesListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
