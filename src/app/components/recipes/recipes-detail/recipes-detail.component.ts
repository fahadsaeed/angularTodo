import { Component, OnInit, Input } from '@angular/core';

import { Recipe} from '../../recipes/recipe.model';
import { ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  constructor(private slService: ShoppingListService) { }
  @Input() recipe: Recipe;
  ngOnInit() {
  }

  onAddToShoppingList() {
    this.slService.addIngredients(this.recipe.ingredients);
  }
}
