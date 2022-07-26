import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Route, Router, NavigationEnd } from '@angular/router';
import { SearchService } from 'src/app/modules/shared/services/search.service';

@Component({
  selector: 'header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {

  isSearchOn:boolean = false;
  isSearchResults:boolean = false;
  search:string = "";

  productsList:any;

  constructor(
    private _elementRef: ElementRef,
    private router: Router,
    private searchService: SearchService,
  ) {

    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.resetSearchBox();
        this.resetResults();
      }
    });

  }


  showSearch() {
    let elem = this._elementRef.nativeElement
    elem.children[0].children[1].classList.toggle('show')
    this.resetResults()
  }

  handleSearchChange() {

    this.resetResults()

    if(this.search.length > 1) {

      this.isSearchOn = true

      this.searchService.getSearchSuggestionsData().subscribe((res:any) => {
        this.isSearchResults = true;
        this.productsList = res
      })

    }

  }

  isDataAvailable() {
    return this.productsList.length != 0
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event:any) {

    let elem = this._elementRef.nativeElement
    let searchContainerElem =  elem.children[0].children[1]
    let overlayElem = elem.children[0].children[1].children[0];

    let searchLinkElem = document.querySelector('.search-link')
    let searchCloseElem = document.querySelector('.search-close');

    if(!searchContainerElem?.contains(event.target)) {
      if(!searchLinkElem?.contains(event.target)) {
        searchContainerElem.classList.remove('show')
        this.resetResults()
        this.search = ""
      }
    }
    else {
      if(overlayElem?.contains(event.target) || searchCloseElem?.contains(event.target)) {
        searchContainerElem.classList.remove('show')
        this.resetResults()
        this.search = ""
      }
    }
  }

  resetResults() {
    this.isSearchOn = false;
    this.isSearchResults = false;
  }

  resetSearchBox() {
    let elem = this._elementRef.nativeElement
    elem.children[0].children[1].classList.remove('show')
    this.search = ""
  }

  gotToSearch(query:any) {
    this.router.navigate(['/search'], { queryParams: { q: query } })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {

  }


  ngOnInit(): void {

  }

}
