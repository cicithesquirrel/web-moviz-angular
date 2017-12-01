import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../../model/movie';
import { DatastoreService } from '../../datastore.service';
import { Kind } from '../movie-prop/movie-prop-kind';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DatastoreService]
})
export class MainComponent implements OnInit {

  @Input() movie: Movie;

  PropertyKind = Kind;

  constructor(
    private route: ActivatedRoute,
    private datastore: DatastoreService,
    private location: Location
  ) { }

  ngOnInit() {
    this.loadMovie();
  }

  loadMovie() {
    const id = this.route.snapshot.paramMap.get('id');
    this.datastore.getMovie(id)
      .subscribe(m => this.movie = m);
  }

  getCountryImageUrl(): string {
    return '/assets/flags/' + this.movie.country + '.png';
  }

  getAltTitles() {
    let titles = [];
    if (this.movie['alt-titles']) {
      for (var country in this.movie['alt-titles']) {
        titles.push({ country: country, title: this.movie['alt-titles'][country] });
      }
    }
    return titles;
  }
}
