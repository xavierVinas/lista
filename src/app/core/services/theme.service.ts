import { Inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Theme, ThemeMode } from '../models/theme/theme.model';
import { getDefaultThemeMode, themeModes } from '../config/theme.config';
import { SessionData } from '../models/enums/storare.enum';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { usePreset } from '@primeng/themes';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentThemeMode: ThemeMode = getDefaultThemeMode();
  private selectedThemeSubject: BehaviorSubject<ThemeMode> =
    new BehaviorSubject<ThemeMode>(this.currentThemeMode);
  public selectedThemeMode$: Observable<ThemeMode> =
    this.selectedThemeSubject.asObservable();
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _storage: StorageService
  ) {}

  public get appThemeMode(): Observable<ThemeMode[]> {
    return of(themeModes);
  }

  public intializeTheme(): void {
    const _theme: ThemeMode | null = this._storage.getInLocalStorage(
      SessionData.THEME
    );
    this.currentThemeMode = _theme || this.currentThemeMode;

    this.changeThemeMode(this.currentThemeMode);
  }

  public changeThemeMode(mode: ThemeMode): void {
    const element = this.document.querySelector('html')!;
    element.className = '';
    element.classList.add(`theme-${mode.value}`);
    this.selectedThemeSubject.next(mode);
    this._storage.setInLocalStorage(SessionData.THEME, mode);
  }
}
