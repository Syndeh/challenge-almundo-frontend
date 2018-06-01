import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() filterNameEvent = new EventEmitter<any>();
  @Output() filterStarEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  filter (name) {
    this.filterNameEvent.emit(name);
  }

  filterStar (star) {
    let filter = star ? {stars: star}: {};
    this.filterStarEvent.emit(filter);
  }

}
