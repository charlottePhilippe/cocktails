import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from 'src/app/shared/models/ingredients.model';
import { PanierCocktailsService } from 'src/app/shared/services/panier.cocktails.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit, OnDestroy {

public ingredients: Ingredients[] = [ new Ingredients('lemon', 1)];
private subscription: Subscription;

  constructor( private panierService: PanierCocktailsService) { }

  ngOnInit() {
    this.subscription = this.panierService.panier.subscribe( (ingredients: Ingredients[]) => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe
  }

}
