import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {RecipesComponent} from './recipes.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipesDetailComponent} from './recipes-detail/recipes-detail.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeFormComponent} from './recipe-form/recipe-form.component';
import {RecipesRoutingModule} from './recipes-routing.module';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesDetailComponent,
    RecipeStartComponent,
    RecipeFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule {}
