import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'all-search-results',
  templateUrl: './all-search-results.component.html',
  styleUrls: ['./all-search-results.component.scss']
})
export class AllSearchResultsComponent implements OnInit {

  @Input() data:any;


  constructor() { }

  isSearchResults():void {
    this.data.length != 0;
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
  }

}
