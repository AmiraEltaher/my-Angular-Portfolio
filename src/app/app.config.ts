import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()],

};
