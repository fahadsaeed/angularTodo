import {Component, OnInit, Output, ViewChild, EventEmitter, ElementRef, OnDestroy} from '@angular/core';

import {Ingredient} from '../../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {FormGroup, NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {


  // @ViewChild('inputName') inputNameRef: ElementRef;
  // @ViewChild('inputAmount') inputAmountRef: ElementRef;

  // @Output() onAdd = new EventEmitter<Ingredient>();


  @ViewChild('f') form: NgForm;

  formSubscribe: Subscription;
  editForm: Ingredient;
  editIndex: number;
  editMode: Boolean = false;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
   this.formSubscribe =  this.slService.onEditIngredients.subscribe((index: number) => {
      this.editIndex = index;
      this.editForm = this.slService.getIngredient(index);
      this.editMode = true;
      this.form.setValue({
        name : this.editForm.name,
        amount : this.editForm.amount,
      });
    });
  }


  // add() {
  //   const name = this.inputNameRef.nativeElement.value;
  //   const amount = this.inputAmountRef.nativeElement.value;
  //   const newIngredient = new Ingredient(name, amount);
  //   // this.onAdd.emit(newIngredient);
  //   this.slService.addIngredient(newIngredient);
  // }

  add(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      this.slService.editIngredient(this.editIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.formSubscribe.unsubscribe();
  }
}
