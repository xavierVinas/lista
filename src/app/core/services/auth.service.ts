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
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private baseUrl = 'http://49.13.20.148:3010/api';

  constructor(private _http: HttpClient) {}

  public login(email: string, password: string): Observable<any> {
    return this._http.post<Pick<User, 'email' | 'name'>>(
      `${this.baseUrl}/v1/auth/login`,
      { email, password }
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

  public logout(): void {
    // this.isAuthenticatedSubject.next(false);
    // localStorage.removeItem('username');
  }
}
