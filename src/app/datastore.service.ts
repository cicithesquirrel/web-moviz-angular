import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';

import { Movie } from './model/movie';

// see: https://angular.io/guide/http
// see: http://blog.ninja-squad.com/2017/07/17/http-client-module/

@Injectable()
export class DatastoreService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('/assets/datastore.json');
  }

  getMovie(id:string): Observable<Movie> {
    return this.http.get<Movie[]>('/assets/datastore.json').map(movies => movies.find(movie => movie.id === id));
  }
}
