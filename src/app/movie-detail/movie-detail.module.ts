import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [MainComponent],
  bootstrap: [MainComponent],
  exports: [MainComponent]
})
export class MovieDetailModule { }
