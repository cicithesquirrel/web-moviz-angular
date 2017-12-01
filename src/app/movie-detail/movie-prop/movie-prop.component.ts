import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-prop',
  templateUrl: './movie-prop.component.html',
  styleUrls: ['./movie-prop.component.css']
})
export class MoviePropComponent implements OnInit {

  @Input() label: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
