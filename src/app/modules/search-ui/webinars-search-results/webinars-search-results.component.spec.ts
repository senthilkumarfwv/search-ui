import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarsSearchResultsComponent } from './webinars-search-results.component';

describe('WebinarsSearchResultsComponent', () => {
  let component: WebinarsSearchResultsComponent;
  let fixture: ComponentFixture<WebinarsSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebinarsSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarsSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
