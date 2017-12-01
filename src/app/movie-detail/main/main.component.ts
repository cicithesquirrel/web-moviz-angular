import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../../model/movie';
import { DatastoreService } from '../../datastore.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DatastoreService]
})
export class MainComponent implements OnInit {

  @Input() movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private datastore: DatastoreService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    const id = this.route.snapshot.paramMap.get('id');
    this.datastore.getMovie(id)
      .subscribe(m => this.movie = m);
  }

}
