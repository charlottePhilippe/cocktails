import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from 'src/app/shared/cocktail.model';


@Component({
  selector: 'app-cocktails-detail',
  templateUrl: './cocktails-detail.component.html',
  styleUrls: ['./cocktails-detail.component.scss']
})
export class CocktailsDetailComponent implements OnInit {
  @Input() cocktail: Cocktail;
  constructor() { }

  ngOnInit() {
  }

}
