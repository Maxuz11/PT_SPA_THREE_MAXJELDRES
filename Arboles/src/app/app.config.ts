import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  //aqui se agregan los modulos que necesite la app
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(), provideAnimations(),
  ],
};
