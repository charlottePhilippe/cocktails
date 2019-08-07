import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { BehaviorSubject } from 'rxjs';
import { Ingredients } from '../models/ingredients.model'

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject<Cocktail[]>([
    new Cocktail(
      'Mojito', 
      'https://www.rhum-cocktails.com/medias/mojito.jpg', 
      'Traditionally, a mojito is a cocktail that consists of five ingredients: white rum, sugar (traditionally sugar cane juice), lime juice, soda water, and mint.[1][2] Its combination of sweetness, citrus, and herbaceous mint flavors is intended to complement the rum, and has made the mojito a popular summer drink',
      [
        new Ingredients('perrier', 1),
        new Ingredients('citron', 2),
      ]),
    new Cocktail(
      'Margarita', 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/MargaritaReal.jpg/220px-MargaritaReal.jpg', 
      'A margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice (on the rocks), blended with ice (frozen margarita), or without ice (straight up). Although it has become acceptable to serve a margarita in a wide variety of glass types, ranging from cocktail and wine glasses to pint glasses and even large schooners, the drink is traditionally served in the eponymous margarita glass, a stepped-diameter variant of a cocktail glass or champagne coupe',
      [
        new Ingredients('perrier', 1),
        new Ingredients('citron', 2),
        new Ingredients('sucre', 3),
      ]),
    new Cocktail(
      'Sour', 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/MargaritaReal.jpg/220px-MargaritaReal.jpg', 
      'A sour is a traditional family of mixed drinks. Common examples of sours are the margarita and the sidecar. Sours belong to one of the old families of original cocktails and are described by Jerry Thomas in his 1862 book How to Mix Drinks',
      [
        new Ingredients('limonade', 1),
        new Ingredients('amande', 2),
        new Ingredients('citron', 2),
      ]),
    new Cocktail(
      'Martini', 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/15-09-26-RalfR-WLC-0084.jpg/220px-15-09-26-RalfR-WLC-0084.jpg', 
      'The martini is a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist. Over the years, the martini has become one of the best-known mixed alcoholic beverages.',
      [
        new Ingredients('perrier', 1),
        new Ingredients('martini', 2),
        new Ingredients('fraise', 3),
      ])
    ]);

  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject<Cocktail>(this.cocktails.value[0]);

  constructor() { }

  selectCocktail(index: number): void {
  this.cocktail.next(this.cocktails.value[index])
  }
}
