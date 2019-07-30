import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsDetailComponent } from './cocktails-detail.component';

describe('CocktailsDetailComponent', () => {
  let component: CocktailsDetailComponent;
  let fixture: ComponentFixture<CocktailsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
