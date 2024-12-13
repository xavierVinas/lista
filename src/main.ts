import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';
import { getDefaultPreset } from './app/core/config/theme.config';

// Hacer el load config
// export function initializeApp(_theme: ThemeService) {
//   return () => {
//     _theme.intializeTheme();
//   };
// }

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAnimations(),
    providePrimeNG({
      ripple: false,
      theme: {
        preset: getDefaultPreset(),
        options: {
          darkModeSelector: '.theme-dark',
          cssLayer: {
            name: 'primeng',
            order: 'app-styles, primeng',
          },
        },
      },
    }),
  ],
}).catch((err) => console.error(err));
