import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user/user.models';
import { Button } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { Observable, tap } from 'rxjs';
import { ThemeMode } from '../../models/theme/theme.model';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Select } from 'primeng/select';
import { Popover } from 'primeng/popover';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Button,
    FloatLabelModule,
    Select,
    Popover,
  ],
})
export class HeaderComponent implements OnInit {
  public selectedTheme: string = 'light';
  public user!: User;
  public appThemesMode$!: Observable<ThemeMode[]>;
  public selectedThemeMode$!: Observable<ThemeMode>;
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _theme: ThemeService
  ) {}

  public ngOnInit(): void {
    this.appThemesMode$ = this._theme.appThemeMode;
    this.selectedThemeMode$ = this._theme.selectedThemeMode$;
    this.getUser();
  }

  public changeTheme(mode: ThemeMode): void {
    this._theme.changeThemeMode(mode);
  }

  public getUser(): void {
    this.user = this._auth.user;
  }
  public onLogout(): void {
    this._auth.logout();
    this._router.navigate(['/login']);
  }
}
