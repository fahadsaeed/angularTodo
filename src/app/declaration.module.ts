import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import { DropdownDirective } from './shared/dropdown.directive';



import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipesDetailComponent } from './components/recipes/recipes-detail/recipes-detail.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import {AppRoutingModule} from './app-routing.module';

const components  =  [
  HeaderComponent,
  RecipesComponent,
  RecipeListComponent,
  RecipeItemComponent,
  RecipesDetailComponent,
  ShoppingListComponent,
  ShoppingEditComponent];

@NgModule({
  declarations: components,
  exports : components,
  imports : [CommonModule, AppRoutingModule]
})

export class DeclarationsModule { }
