import { Component, EventEmitter, Output } from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl : './header.component.html'
})

export class HeaderComponent {

  // @Output() featureSelected = new EventEmitter<string>();
  //
  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }

  constructor(private dataStorage: DataStorageService, public auth: AuthService) {}

  onSave() {
    this.dataStorage.storeRecipe().subscribe(
      (response) => {
        console.log('response........', response);
      }
    );
  }

  onFetch() {
    this.dataStorage.getRecipe();
  }

  logout() {
    this.auth.logout();
  }

}
