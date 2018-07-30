import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule } from '@angular/platform-browser';

import {AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';

import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {RecipesModule} from './components/recipes/recipes.module';
import {ShoppingListModule} from './components/shopping-list/shopping-list.module';

import {ShoppingListService} from './components/shopping-list/shopping-list.service';
import {RecipesService} from './components/recipes/recipes.service';
import {DataStorageService} from './shared/data-storage.service';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    RecipesModule,
    ShoppingListModule
  ],
  providers: [
    ShoppingListService,
    RecipesService,
    DataStorageService,
    AuthService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
