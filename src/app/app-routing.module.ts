import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './movies-list/list/list.component';
import { MainComponent } from './movie-detail/main/main.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'movie/:id', component: MainComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
