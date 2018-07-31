import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadingStrategy} from '@angular/router';

import {ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import {HomeComponent} from './core/home/home.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes',  loadChildren: './components/recipes/recipes.module#RecipesModule'},
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
// {preloadingStrategy: PreloadingStrategy}


