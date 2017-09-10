import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movies-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  private movie: Movie;

  constructor() { }

  ngOnInit() {
  }

  getUrl() :string{
    return '/assets/flags/' + this.movie.country + '.png';
  }
}
