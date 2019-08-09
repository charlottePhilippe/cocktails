import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../shared/services/cocktail.service';
import { Cocktail } from 'src/app/shared/models/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss']
})
export class CocktailsListComponent implements OnInit {
  public cocktails: Cocktail[];
  public activeCocktail: number = 0;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailService.cocktails.subscribe((cocktails: Cocktail[]) => {
      this.cocktails = cocktails
    })
  }
}
