import {Injectable} from '@angular/core';
import {RecipesService} from '../components/recipes/recipes.service';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../components/recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipesService, private auth: AuthService) {}

  storeRecipe() {
    const token = this.auth.getToken();
    return this.http.put(
      'https://ng-recipe-book-97396.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes()
    );
  }


  getRecipe() {
    const token = this.auth.getToken();

    this.http.get<Recipe[]>(
      'https://ng-recipe-book-97396.firebaseio.com/recipes.json?auth=' + token
  ).subscribe((response) => {
      console.log('getRecipe response...........', response);
      this.recipeService.setRecipes(response);
    });
  }

}
