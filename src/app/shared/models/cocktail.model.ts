import { Ingredients } from "./ingredients.model";

export class Cocktail {
public name: string;
public img: string;
public desc: string;
public ingredients: Ingredients[]

constructor(name: string, img: string, desc: string, ingredients: Ingredients[]) {
this.name = name;
this.img = img;
this.desc = desc;
this.ingredients = ingredients;
}
}