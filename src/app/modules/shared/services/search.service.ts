import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  getSearchSuggestionsData(): Observable<any>{
    return this.http.get('https://mocki.io/v1/74e84149-373b-4b96-96d2-c6ae15bd41ea');
  }

  getSearchResultsData(): Observable<any>{
    return this.http.get('https://mocki.io/v1/580a961c-a010-44ec-97e0-3ccc50232cbc');
  }

}
