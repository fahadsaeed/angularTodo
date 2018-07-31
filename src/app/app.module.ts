import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule } from '@angular/platform-browser';

import {AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {RecipesModule} from './components/recipes/recipes.module';
import {ShoppingListModule} from './components/shopping-list/shopping-list.module';
import {CoreModule} from './core/core.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    AuthModule,
    RecipesModule,
    ShoppingListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
