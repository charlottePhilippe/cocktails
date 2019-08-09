import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'
import { CocktailService } from 'src/app/shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.scss']
})

export class CocktailEditComponent implements OnInit {
public cocktail: FormGroup;
  constructor(private fb: FormBuilder, private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktail = this.fb.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      desc: [''],
      ingredients: this.fb.array([])
    }) 
  }

  addIngredients(): void {
    (<FormArray>this.cocktail.get('ingredients')).push(
      this.fb.group({
        name: [''],
        quantity: ['']
      }))
  }

  addCocktail() {
    return this.cocktailService.addCocktail(this.cocktail.value)
  }

}
