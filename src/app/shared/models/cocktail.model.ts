import { Ingredients } from "./ingredients.model";

export class Cocktail {
private name: string;
private img: string;
private desc: string;
private ingredients: Ingredients[]

constructor(name: string, img: string, desc: string, ingredients: Ingredients[]) {
this.name = name;
this.img = img;
this.desc = desc;
this.ingredients = ingredients;
}
}