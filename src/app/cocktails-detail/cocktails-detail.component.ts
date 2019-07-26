import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-detail',
  templateUrl: './cocktails-detail.component.html',
  styleUrls: ['./cocktails-detail.component.scss']
})
export class CocktailsDetailComponent implements OnInit {
  public cocktail = new Cocktail('Mojito', 'https://www.rhum-cocktails.com/medias/mojito.jpg', 'Traditionally, a mojito is a cocktail that consists of five ingredients: white rum, sugar (traditionally sugar cane juice), lime juice, soda water, and mint.[1][2] Its combination of sweetness, citrus, and herbaceous mint flavors is intended to complement the rum, and has made the mojito a popular summer drink');

  constructor() { }

  ngOnInit() {
  }

}
