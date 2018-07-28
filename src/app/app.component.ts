import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // feature = 'recipes';
  //
  // OnNavigation(features:  string){
  //   this.feature = features;
  // }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCeT9vnPXPhi1f6GUFmf3WL2fwqwV9yq0I",
      authDomain: "ng-recipe-book-97396.firebaseapp.com",
    });
  }

}
