import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this._auth.isAuthenticated$.pipe(
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/login']);
        }
        return isAuthenticated;
      })
    );
  }
}
