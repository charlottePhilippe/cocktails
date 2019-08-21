import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../shared/services/cocktail.service';
import { Cocktail } from 'src/app/shared/models/cocktail.model';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss'],
  providers: [FilterPipe]
})
export class CocktailsListComponent implements OnInit {
  search: string = '';
  public cocktails: Cocktail[];
  public activeCocktail: number = 0;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailService.cocktails.subscribe((cocktails: Cocktail[]) => {
      this.cocktails = cocktails
    })
  }
}
