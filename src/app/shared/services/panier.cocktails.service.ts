import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredients } from '../models/ingredients.model';

@Injectable()
export class PanierCocktailsService {
  public panier: BehaviorSubject<Ingredients[]> = new BehaviorSubject<Ingredients[]>(null);

  addIngredients(ingredients: Ingredients[]) {
    const currentValue = this.panier.value;
    if (currentValue && currentValue.length) {
      this.panier.next(currentValue.concat(ingredients));
    } else {
      this.panier.next(ingredients);
    }
  }
  constructor() { }
  
}
