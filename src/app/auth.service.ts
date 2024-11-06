import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      this.isAuthenticatedSubject.next(true);
    }
  }

  login(username: string, password: string): boolean {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
}
