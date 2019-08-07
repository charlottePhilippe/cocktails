import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierCocktailsComponent } from './panier-cocktails.component';

describe('PanierCocktailsComponent', () => {
  let component: PanierCocktailsComponent;
  let fixture: ComponentFixture<PanierCocktailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierCocktailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
