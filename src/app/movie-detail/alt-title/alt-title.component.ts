import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alt-title',
  templateUrl: './alt-title.component.html',
  styleUrls: ['./alt-title.component.css']
})
export class AltTitleComponent implements OnInit {

  @Input() title: any;

  constructor() { }

  ngOnInit() {
  }

  getCountryImageUrl(): string {
    return '/assets/flags/' + this.title.country + '.png';
  }
}
