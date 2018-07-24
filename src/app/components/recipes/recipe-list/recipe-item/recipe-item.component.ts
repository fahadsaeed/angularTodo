import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import {RecipesService} from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe: Recipe;
 // @Output() selectedRecipe = new EventEmitter<void>();
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  onSelect() {
    // this.selectedRecipe.emit();
    this.recipesService.selectedRecipe.emit(this.recipe);
  }

}
