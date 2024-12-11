import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user/user.models';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { Observable, tap } from 'rxjs';
import { Theme } from '../../models/theme/theme.model';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    OverlayPanelModule,
    ButtonModule,
    DropdownModule,
    FloatLabelModule,
  ],
})
export class HeaderComponent implements OnInit {
  public selectedTheme: string = 'light';
  public user!: User;
  public appThemes$!: Observable<Theme[]>;
  public selectedTheme$!: Observable<Theme>;
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _theme: ThemeService
  ) {}

  public ngOnInit(): void {
    this.appThemes$ = this._theme.appThemes;
    this.selectedTheme$ = this._theme.selectedTheme$;
    this.getUser();
  }

  public changeTheme(theme: Theme): void {
    this._theme.changeTheme(theme);
  }

  public getUser(): void {
    this.user = this._auth.user;
  }
  public onLogout(): void {
    this._auth.logout();
    this._router.navigate(['/login']);
  }
}
