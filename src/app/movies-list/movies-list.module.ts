import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ListComponent, ItemComponent],
  bootstrap: [ListComponent],
  exports: [ListComponent]
})
export class MoviesListModule { }
