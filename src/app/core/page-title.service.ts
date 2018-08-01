import { Injectable} from '@angular/core';
import {Router, ActivatedRoute, ActivationStart, Event} from '@angular/router';

// import { filter  } from 'rxjs/operators';
import {filter} from 'rxjs/operators';
import {map, mergeMap} from 'rxjs/internal/operators';
import {Title} from '@angular/platform-browser';


@Injectable()
export class PageTitleService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private title: Title) {
  }

  onChangeTitle() {
    this.router.events.pipe(
      filter(event => event instanceof ActivationStart)
    ).subscribe((event: ActivatedRoute) => {
      const title = event.snapshot.data['title'];
      console.log('page title is......', title);
      if (title) {
        this.title.setTitle(title);
      }
    });
  }

}
