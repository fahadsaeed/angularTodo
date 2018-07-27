import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { Recipe} from '../../recipes/recipe.model';
import { ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  constructor(private slService: ShoppingListService, private route: ActivatedRoute, private router: Router, private recipeService: RecipesService) { }
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.slService.addIngredients(this.recipe.ingredients);
  }


  delete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
