import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MoviePropComponent } from './movie-prop/movie-prop.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [MainComponent, MoviePropComponent],
  bootstrap: [MainComponent],
  exports: [MainComponent]
})
export class MovieDetailModule { }
