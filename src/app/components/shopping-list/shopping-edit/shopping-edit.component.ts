import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

import {Ingredient} from '../../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') inputNameRef: ElementRef;
  @ViewChild('inputAmount') inputAmountRef: ElementRef;

  @Output() onAdd = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  add() {
    const name = this.inputNameRef.nativeElement.value;
    const amount = this.inputAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    // this.onAdd.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }
}
