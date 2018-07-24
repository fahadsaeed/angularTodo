import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import {RecipeStartComponent} from './components/recipes/recipe-start/recipe-start.component';
import {RecipesDetailComponent} from './components/recipes/recipes-detail/recipes-detail.component';
import {RecipeFormComponent} from './components/recipes/recipe-form/recipe-form.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent,
   children: [
  { path: '', component: RecipeStartComponent },
  { path: 'new', component: RecipeFormComponent },
  { path: ':id', component: RecipesDetailComponent },
  { path: ':id/edit', component: RecipeFormComponent },
]},
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

//
// , children: [
//   { path: '', component: RecipeStartComponent },
//   { path: 'new', component: RecipeEditComponent },
//   { path: ':id', component: RecipeDetailComponent },
//   { path: ':id/edit', component: RecipeEditComponent },
// ]
