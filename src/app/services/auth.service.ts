import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(
        (userData) => resolve(userData),
        (err) => rejected(err)
      );
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(map((auth) => auth));
  }

  logout() {
    this.afAuth.signOut();
  }
}
