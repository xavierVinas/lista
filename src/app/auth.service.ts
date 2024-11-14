import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // siempre se incia y tiene el ultimo valor emitido (cache)
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  // subject no tiene ultimo valor simplemente te suscribes al cambio de una variable
  //hacer un subject de user
  constructor() {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      this.isAuthenticatedSubject.next(true);
    }
  }

  public login(username: string, password: string): boolean {
    //peticion http => ok o no ok
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem('username', username);
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    return false;
  }

  public logout() {
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }
}
