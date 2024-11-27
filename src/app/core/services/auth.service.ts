import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user/user.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private baseUrl = 'http://49.13.20.148:3010/api';

  constructor(private _http: HttpClient) {
    // const storedUser = localStorage.getItem('username');
    // if (storedUser) {
    //   this.isAuthenticatedSubject.next(true);
    // }
  }

  login(username: string, password: string): Observable<any> {
    return this._http
      .post(`${this.baseUrl}/v1/auth/login`, { username, password })
      .pipe(
        tap((response: any) => {
          console.log('Login exitoso:', response);
        }),
        catchError((error) => {
          console.error('Error en login:', error);
          return throwError(() => error);
        })
      );
  }

  public register(user: Partial<User>): Observable<any> {
    console.log(this.baseUrl, user);

    return this._http.post(`${this.baseUrl}/v1/auth/register`, user).pipe(
      tap(() => {
        console.log('Registro exitoso');
      }),
      catchError((error) => {
        console.error('Error en registro:', error);
        return throwError(() => error);
      })
    );
  }

  logout(): void {
    // this.isAuthenticatedSubject.next(false);
    // localStorage.removeItem('username');
  }

  getUsername(): any {
    // return localStorage.getItem('username');
  }
}
