import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { ActivatedRoute, Params } from '@angular/router'
import { Cocktail } from 'src/app/shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.scss']
})

export class CocktailEditComponent implements OnInit {
public cocktailForm: FormGroup;
public cocktail: Cocktail;
private edit: boolean;
constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private cocktailService: CocktailService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(( params: Params ) => {
      if (params.index) {
        this.edit = true;
          this.cocktail = this.cocktailService.getCocktail(params.index);
          this.initForm(this.cocktail);
      } else { 
        this.initForm();
      }
    });
  }

  initForm(cocktail = { name: '', img: '', desc: '', ingredients: []}) {
    this.cocktailForm = this.fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      desc: [cocktail.desc],
      ingredients: this.fb.array(cocktail.ingredients.map(ingredient => this.fb.group({ name: ingredient.name, quantity: ingredient.quantity})))
  })
}

  addIngredients(): void {
    (<FormArray>this.cocktailForm.get('ingredients')).push(
      this.fb.group({
        name: [''],
        quantity: ['']
      }))
  }

  addCocktail() {
    if (this.edit) {
    return this.cocktailService.editCocktail(this.cocktailForm.value)
    } else {
    return this.cocktailService.addCocktail(this.cocktailForm.value)
  }
}

}
