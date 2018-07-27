import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

import { Recipe } from '../recipe.model';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  subscription: Subscription;

  constructor(private recipesService: RecipesService) { }
  recipes: Recipe[];

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();

    this.subscription = this.recipesService.changedRecipe.subscribe((recipes) => {
      this.recipes = recipes;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // onSelectedRecipe(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }
}
