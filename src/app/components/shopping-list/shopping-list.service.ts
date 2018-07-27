import {EventEmitter} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  // onAddIngredients = new EventEmitter<Ingredient[]>();
  onAddIngredients = new Subject<Ingredient[]>();
  onEditIngredients = new Subject<number>();

  getIngredients() {
    return this.ingredients.slice();
  }


  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // this.onAddIngredients.emit(this.ingredients.slice());
    this.onAddIngredients.next(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    // this.onAddIngredients.emit(this.ingredients.slice());
    this.onAddIngredients.next(this.ingredients.slice());
  }

 editIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.onAddIngredients.next(this.ingredients.slice());
  }


  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.onAddIngredients.next(this.ingredients.slice());
  }




}
