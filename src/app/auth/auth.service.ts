import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  token: string | boolean;


  constructor(private router: Router) {}

  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res) => console.log('res...........', res))
      .catch((err) => console.log('err...........', err));
  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.router.navigate(['/']);
        console.log('res...........', res); this.getToken();
      })
      .catch((err) => console.log('err...........', err));
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then((token) => {
        console.log('token res.................', token);
        this.token = token;
      })
      .catch((err) => console.log('token err...........', err));
    return this.token;
  }

  isAuthenticated() {
    return !!this.token;
  }

  logout() {
    firebase.auth().signOut();
    this.token = false;
  }
}
