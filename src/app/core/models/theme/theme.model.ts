export interface Theme {
  name: string;
  value: string;
  type: ThemeType;
  preset: any;
}

export interface ThemeMode {
  name: string;
  value: ThemeType;
}

export enum ThemeType {
  DARK = 'dark',
  LIGHT = 'light',
}
