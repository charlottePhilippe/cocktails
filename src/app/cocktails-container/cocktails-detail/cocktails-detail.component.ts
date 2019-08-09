import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { Ingredients } from 'src/app/shared/models/ingredients.model';
import { PanierCocktailsService } from 'src/app/shared/services/panier.cocktails.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-cocktails-detail',
  templateUrl: './cocktails-detail.component.html',
  styleUrls: ['./cocktails-detail.component.scss']
})
export class CocktailsDetailComponent implements OnInit {
 public cocktail: Cocktail;
 public index: number;

  constructor(
    private cocktailService: CocktailService,
    private panierService: PanierCocktailsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params: Params)=> {
      if (params.index) {
        this.index = params.index;
      this.cocktail = this.cocktailService.getCocktail(params.index);
    } else {
      this.cocktail = this.cocktailService.getCocktail(0);
      this.index = 0;
    }
    })
  }


  addPanier(ingredients: Ingredients[]): void {
    this.panierService.addIngredients(ingredients);
  }

  getUrl() {
    return "/cocktails/" + this.index + "/edit";
  }

}
