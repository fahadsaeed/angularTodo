import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipesService: RecipesService) { }
  recipes: Recipe[];

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();

  }

  // onSelectedRecipe(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }
}
