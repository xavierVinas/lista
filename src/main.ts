import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { APP_INITIALIZER } from '@angular/core';
import { ThemeService } from './app/core/services/theme.service';

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
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeApp,
    //   deps: [ThemeService],
    //   multi: true,
    // },
  ],
}).catch((err) => console.error(err));
