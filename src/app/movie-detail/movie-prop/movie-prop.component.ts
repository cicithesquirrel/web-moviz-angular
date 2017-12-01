import { Component, OnInit, Input } from '@angular/core';
import { Kind } from './movie-prop-kind';

@Component({
  selector: 'app-movie-prop',
  templateUrl: './movie-prop.component.html',
  styleUrls: ['./movie-prop.component.css']
})
export class MoviePropComponent implements OnInit {

  @Input() label: string;
  @Input() value: string;
  @Input() kind: Kind = Kind.Text;

  Kind = Kind;

  constructor() { }

  ngOnInit() {
  }

}
