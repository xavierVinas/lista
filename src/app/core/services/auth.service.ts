import { afterNextRender, afterRender, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user/user.models';
import { StorageService } from './storage.service';
import { SessionData } from '../models/enums/storare.enum';
import { Router } from '@angular/router';
interface LoginResponse {
  user: User;
  authorizationToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private baseUrl = 'http://49.13.20.148:3010/api';

  constructor(private _http: HttpClient, private _storage: StorageService) {
    afterNextRender(() => {
      this.getAuthenticationFromInit();
    });
  }

  get user(): User {
    return this._storage.getInLocalStorage(SessionData.USER) as User;
  }

  private getAuthenticationFromInit(): void {
    this.isAuthenticatedSubject.next(
      !!this._storage.getInLocalStorage(SessionData.TOKEN)
    );
  }

  /**
   *
   * @param email
   * @param password
   * @returns login succesfully
   */
  public login(email: string, password: string): Observable<void> {
    return this._http
      .post<LoginResponse>(`${this.baseUrl}/v1/auth/login`, { email, password })
      .pipe(map((resp) => this.setUser(resp)));
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
    this._storage.removeItemFromLocalStorage(SessionData.TOKEN);
    this._storage.removeItemFromLocalStorage(SessionData.USER);
    this.isAuthenticatedSubject.next(false);
  }

  private setUser(login: LoginResponse): void {
    this._storage.setInLocalStorage(SessionData.USER, login.user);
    this._storage.setInLocalStorage(
      SessionData.TOKEN,
      login.authorizationToken
    );
    this.isAuthenticatedSubject.next(true);
  }
}
