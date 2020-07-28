import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private listIngredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Cheese', 8)
  ];

  getIngredients() {
    return this.listIngredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.listIngredients.push(ingredient);
    this.ingredientsChanged.emit(this.listIngredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.listIngredients.push(...ingredients);
    this.ingredientsChanged.emit(this.listIngredients.slice());
  }
}
