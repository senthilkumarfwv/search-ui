import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'webinars-search-results',
  templateUrl: './webinars-search-results.component.html',
  styleUrls: ['./webinars-search-results.component.scss']
})
export class WebinarsSearchResultsComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
