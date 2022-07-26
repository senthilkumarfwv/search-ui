import { Component, OnInit } from '@angular/core';
import { Route, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { SearchService } from 'src/app/modules/shared/services/search.service';

@Component({
  selector: 'app-search-ui',
  templateUrl: './search-ui.component.html',
  styleUrls: ['./search-ui.component.scss']
})
export class SearchUiComponent implements OnInit {

  search:string = "";

  selectedTabIndex = 0;
  selectedCategory:string = "all";

  searchResultsData:Array<Object> = [];

  isSearchResults:boolean = false;

  tabs:any = [
    "all",
    "courses",
    "webinars",
    "articles",
    "instructors"
  ];

  levels:any = [
    'Advanced',
    'Beginner',
    'Intermediate'
  ]

  instrutors:any = [
    'instrutor 01',
    'instrutor 02',
    'instrutor 03'
  ]

  selectedLevelFilter:string = "";
  selectedInstructorFilter:string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) {

    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.searchResults();
      }
    });

  }


  setSelectTabIndex(type:any, i:any) {
    this.selectedTabIndex = i;
    this.selectedCategory = type;
    this.router.navigate(['/search'], { queryParams: { categories: type }, queryParamsHandling: 'merge' })
  }


  searchResults() {

    this.isSearchResults = false;

    this.searchService.getSearchResultsData().subscribe((res:any) => {
      this.searchResultsData = res
      this.isSearchResults = true
    })

  }

  handleSearch() {
    this.selectedTabIndex = 0;
    this.selectedCategory = "all"
    this.router.navigate(['/search'], { queryParams: { q: this.search, categories: this.selectedCategory }})
  }

  handleFilterBy(value:any, type:any) {
    if(type == 'level') {
      this.selectedLevelFilter = value
    }
    else if(type == 'instructor') {
      this.selectedInstructorFilter = value
    }
    this.router.navigate(['/search'], { queryParams: { [type]: value }, queryParamsHandling: 'merge' })
  }

  clearLevelFilterBy() {
    this.selectedLevelFilter = ""
    this.router.navigate(['/search'], { queryParams: { level: null }, queryParamsHandling: 'merge' })
  }

  clearInstructorFilterBy() {
    this.selectedInstructorFilter = ""
    this.router.navigate(['/search'], { queryParams: { instructor: null }, queryParamsHandling: 'merge' })
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params:any) => {
      this.search = params.q
    })

  }


}
