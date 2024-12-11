export interface Theme {
  name: string;
  value: string;
  type: ThemeType;
}

export enum ThemeType {
  DARK = 'dark',
  LIGHT = 'light',
}
