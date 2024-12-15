import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara';
import { Theme, ThemeMode, ThemeType } from '../models/theme/theme.model';

const defaultPalette = {
  primary: {
    50: '{cyan.50}',
    100: '{cyan.100}',
    200: '{cyan.200}',
    300: '{cyan.300}',
    400: '{cyan.400}',
    500: '{cyan.500}',
    600: '{cyan.600}',
    700: '{cyan.700}',
    800: '{cyan.800}',
    900: '{cyan.900}',
    950: '{cyan.950}',
  },
};

const lightSurface: { [key: string]: string } = {
  a: '#ffffff',
  b: '#efefef',
  c: '#e9ecef',
  d: '#dee2e6',
  e: '#ffffff',
  f: '#ffffff',
};

const darkSurface: { [key: string]: string } = {
  a: '#2a323d',
  b: '#20262e',
  c: 'rgba(255, 255, 255, 0.04)',
  d: '#3f4b5b',
  e: '#2a323d',
  f: '#2a323d',
};

const defaultSemantic = {
  primary: defaultPalette.primary,
  colorScheme: {
    light: { surface: lightSurface },
    dark: { surface: darkSurface },
  },
};

export const themes: Theme[] = [
  {
    name: 'Claro',
    value: 'theme-light',
    type: ThemeType.LIGHT,
    preset: definePreset(Lara, {
      semantic: defaultSemantic,
    }),
  },
];

export const themeModes: ThemeMode[] = [
  {
    name: 'Claro',
    value: ThemeType.LIGHT,
  },
  {
    name: 'Oscuro',
    value: ThemeType.DARK,
  },
];

export function getDefaultThemeMode(): ThemeMode {
  return themeModes.find((theme) => theme.value === ThemeType.LIGHT)!;
}

export function getDefaultPreset() {
  return themes.find((theme) => theme.type === ThemeType.LIGHT)?.preset!;
}
