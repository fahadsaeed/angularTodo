import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {PageTitleService} from './core/page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit() {
    this.pageTitleService.onChangeTitle();

    firebase.initializeApp({
      apiKey: 'AIzaSyCeT9vnPXPhi1f6GUFmf3WL2fwqwV9yq0I',
      authDomain: 'ng-recipe-book-97396.firebaseapp.com',
    });
  }

}
