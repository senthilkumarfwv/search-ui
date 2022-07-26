import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'courses-search-results',
  templateUrl: './courses-search-results.component.html',
  styleUrls: ['./courses-search-results.component.scss']
})
export class CoursesSearchResultsComponent implements OnInit {

  @Input() data:any;

  learnerStar:any[] = [];

  mainRating:any = 4.5;

  constructor() { }

  getDate(value:any) {
    return moment(value).format('MMM Do YY')
  }

  checkRating(rating:any, index:any) {
    if(Math.ceil(rating) > (index+1)){
      return 'full'
    }
    else if(Math.ceil(rating) == (index+1)){
      if(rating < (index+1)) {
        return 'half'
      }
      else {
        return 'full'
      }
    }
    else {
      return 'nill'
    }
  }

  getDuration(value:any) {
    let hours = Math.floor(value / 60);
    let minutes = value % 60;
    return hours+'h '+minutes+'min'
  }

  ngOnInit(): void {

    this.learnerStar = Array(5).fill(0).map((x,i)=>i);

  }

  ngOnChanges(changes: SimpleChanges) {

  }

}
