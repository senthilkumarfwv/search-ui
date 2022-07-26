import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SearchUiRoutingModule } from './search-ui-routing.module';
import { SearchUiComponent } from './search-ui.component';
import { CoursesSearchResultsComponent } from './courses-search-results/courses-search-results.component';
import { AllSearchResultsComponent } from './all-search-results/all-search-results.component';
import { WebinarsSearchResultsComponent } from './webinars-search-results/webinars-search-results.component';


@NgModule({
  declarations: [
    SearchUiComponent,
    CoursesSearchResultsComponent,
    AllSearchResultsComponent,
    WebinarsSearchResultsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchUiRoutingModule
  ]
})
export class SearchUiModule { }
