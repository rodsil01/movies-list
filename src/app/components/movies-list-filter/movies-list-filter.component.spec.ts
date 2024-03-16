import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListFilterComponent } from './movies-list-filter.component';

describe('MoviesListFilterComponent', () => {
  let component: MoviesListFilterComponent;
  let fixture: ComponentFixture<MoviesListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesListFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
