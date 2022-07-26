import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { CommonDirective } from './common.directive';
import { SearchLinkDirective } from './common.directive';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { SearchPipe } from './pipes/search.pipe'
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    CommonDirective,
    SearchLinkDirective,
    HeaderSearchComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    CommonDirective,
    SearchLinkDirective,
    SearchPipe,
    HeaderSearchComponent
  ],
  providers: [
    SearchService
  ]
})
export class SharedModule { }
