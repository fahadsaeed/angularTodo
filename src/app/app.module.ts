import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeclarationsModule } from './declaration.module';
import {ShoppingListService} from './components/shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipeFormComponent } from './components/recipes/recipe-form/recipe-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeStartComponent,
    RecipeFormComponent
  ],
  imports: [
    BrowserModule,
    DeclarationsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
