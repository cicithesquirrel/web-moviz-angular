import { Component, OnInit } from '@angular/core';

import { DatastoreService } from '../../datastore.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [DatastoreService]
})
export class ListComponent implements OnInit {

  private movies: Movie[];

  constructor(private datastore: DatastoreService) { }

  ngOnInit() {
    this.datastore.getAllMovies().subscribe(movies => this.movies = movies);
  }
}
