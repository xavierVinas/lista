import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { getDefaultPreset } from './app/core/config/theme.config';
import { authTokenInterceptor } from './app/core/interceptors/auth-token.interceptor';

// Hacer el load config
// export function initializeApp(_theme: ThemeService) {
//   return () => {
//     _theme.intializeTheme();
//   };
// }

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([authTokenInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
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
