import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSearchResultsComponent } from './courses-search-results.component';

describe('CoursesSearchResultsComponent', () => {
  let component: CoursesSearchResultsComponent;
  let fixture: ComponentFixture<CoursesSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
