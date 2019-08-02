import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';


@Component({
  selector: 'app-cocktails-detail',
  templateUrl: './cocktails-detail.component.html',
  styleUrls: ['./cocktails-detail.component.scss']
})
export class CocktailsDetailComponent implements OnInit {
 public cocktail: Cocktail;
  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailService.cocktail.subscribe( (cocktail: Cocktail) => {
      this.cocktail = cocktail;
    })
  }

}
