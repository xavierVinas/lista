import { Inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Theme } from '../models/theme/theme.model';
import { getDefaultTheme, themes } from '../config/theme.config';
import { SessionData } from '../models/enums/storare.enum';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: Theme = getDefaultTheme();
  private selectedThemeSubject: BehaviorSubject<Theme> =
    new BehaviorSubject<Theme>(this.currentTheme);
  public selectedTheme$: Observable<Theme> =
    this.selectedThemeSubject.asObservable();
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _storage: StorageService
  ) {}

  public get appThemes(): Observable<Theme[]> {
    return of(themes);
  }

  public intializeTheme(): void {
    const _theme: Theme | null = this._storage.getInLocalStorage(
      SessionData.THEME
    );
    this.currentTheme = _theme || this.currentTheme;

    this.changeTheme(this.currentTheme);
  }

  public changeTheme(theme: Theme): void {
    const linkElement = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    linkElement.href = `${theme.value}.css`;
    this.selectedThemeSubject.next(theme);
    this._storage.setInLocalStorage(SessionData.THEME, theme);
  }
}
