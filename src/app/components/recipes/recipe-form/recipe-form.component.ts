import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  id: number;
  editMode: boolean;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipesService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.formInit();
        }
      );
  }

  formInit() {
    let recipeName: string;
    let recipeImagePath: string;
    let recipeDescription: string;
    let recipeIngredients =  new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name, Validators.required),
              'amount' : new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name : new FormControl(recipeName, Validators.required),
      imagePath : new FormControl(recipeImagePath, Validators.required),
      description : new FormControl(recipeDescription, Validators.required),
      ingredients : recipeIngredients
    });
  }


  onSubmit() {
    //   const recipe =  this.recipeForm.value;
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']);


    if (this.editMode) {
      this.recipeService.editRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
    this.cancel();
  }

  addIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(),
        'amount' : new FormControl(),
      })
    );
  }

  cancel() {
    this.router.navigate(['../'], {relativeTo : this.route});
  }

  removeIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  getIngredientField() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

}
