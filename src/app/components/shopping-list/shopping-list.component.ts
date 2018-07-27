import {Component, OnDestroy, OnInit} from '@angular/core';

import {Ingredient} from './../../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private slServices: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slServices.getIngredients();
    this.subscription =  this.slServices.onAddIngredients.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // onIngredientAdd(ingredient: Ingredient) {
  //   // this.ingredients.push(ingredient);
  // }

  edit(index: number) {
    this.slServices.onEditIngredients.next(index);
  }
}
