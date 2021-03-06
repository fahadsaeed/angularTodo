import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuardService} from '../../auth/auth-guard.service';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipesComponent} from './recipes.component';
import {RecipesDetailComponent} from './recipes-detail/recipes-detail.component';
import {RecipeFormComponent} from './recipe-form/recipe-form.component';


const recipeRoute: Routes = [
  { path: '', component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeFormComponent, canActivate: [AuthGuardService], data : {title : 'Add Recipe'} },
      { path: ':id', component: RecipesDetailComponent, data : {title : 'Recipe Details'}  },
      { path: ':id/edit', component: RecipeFormComponent,  canActivate: [AuthGuardService], data : {title : 'Edit Recipe'}  },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoute)],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ]
})
export class RecipesRoutingModule {}
