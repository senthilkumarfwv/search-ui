import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSearch:boolean = false;

  constructor() { }

  showSearch() {
    this.isSearch = true
  }

  ngOnInit(): void {
  }

}
