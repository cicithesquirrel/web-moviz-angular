import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MoviePropComponent } from './movie-prop/movie-prop.component';
import { AltTitleComponent } from './alt-title/alt-title.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [MainComponent, MoviePropComponent, AltTitleComponent],
  bootstrap: [MainComponent],
  exports: [MainComponent]
})
export class MovieDetailModule { }
