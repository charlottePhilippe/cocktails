import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss']
})
export class CocktailsListComponent implements OnInit {
  cocktails: Cocktail[] = [
    new Cocktail('Mojito'),
    new Cocktail('Margarita'),
    new Cocktail('Sour'),
    new Cocktail('Martini')
  ];

  constructor() { }

  ngOnInit() {
  }

}
