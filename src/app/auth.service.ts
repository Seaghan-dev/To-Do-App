import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<firebase.User>;
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  async register(email: string, password: string) {
    try {
      await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
      console.log('Registration successful!');
    } catch (error) {
      console.log('Something went wrong', error.message);
    }
  }

  async login(email: string, password: string) {
    try {
      await this.firebaseAuth.signInWithEmailAndPassword(email, password);
      console.log('User logged in!');
      this.router.navigate(['to-do']);
    } catch (error) {
      console.log('Something went wrong', error.message);
    }
  }

  async logout() {
    this.firebaseAuth.signOut();
    this.router.navigate(['login']);
  }
}
