import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './header/header.component';
import { HomeComponent } from './home/home.component';

import {AppRoutingModule} from '../app-routing.module';
import {AuthService} from '../auth/auth.service';
import {ShoppingListService} from '../components/shopping-list/shopping-list.service';
import {DataStorageService} from '../shared/data-storage.service';
import {RecipesService} from '../components/recipes/recipes.service';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipesService,
    DataStorageService,
    AuthService]
})
export class CoreModule {}


