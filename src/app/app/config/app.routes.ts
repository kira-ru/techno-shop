import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@pages/layouts/main-menu-layout/ui/main-menu-layout.component').then(c => c.MainMenuLayoutComponent),
    children: [
      {
        path: 'authentication',
        title: 'Authentication',
        loadComponent: () => import('@pages/auth/auth-page/auth-page.component').then(c => c.AuthPageComponent),
      }
    ],
    canActivate: [],
  },
  {
    path: 'not-found',
    loadComponent: () => import('@pages/not-found/not-found.component').then(c => c.NotFoundComponent),
    canActivate: [],
    data: {
      i18n: ['SYSTEM_PAGES'],
    },
  },
];
