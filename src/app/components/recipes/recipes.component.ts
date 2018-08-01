import { Component, OnInit } from '@angular/core';
import {RecipesService} from './recipes.service';
import {Recipe} from './recipe.model';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipesService: RecipesService, private title : Title) { }

  ngOnInit() {
    this.title.setTitle('Recipe');

    // this.recipesService.selectedRecipe.
    // subscribe((recipe: Recipe) => this.selectedRecipe = recipe);
  }

}
