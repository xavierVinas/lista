import { Theme, ThemeType } from '../models/theme/theme.model';

export const themes: Theme[] = [
  {
    name: 'Claro',
    value: 'theme-lara-light-blue',
    type: ThemeType.LIGHT,
  },
  {
    name: 'Oscuro',
    value: 'theme-lara-dark-blue',
    type: ThemeType.DARK,
  },
];

export function getDefaultTheme(): Theme {
  return themes.find((theme) => theme.type === ThemeType.LIGHT)!;
}
