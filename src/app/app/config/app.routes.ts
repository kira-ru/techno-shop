import { Routes } from '@angular/router';
import {AppRoutes} from "@app/config/routes.constant";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@pages/layouts/main-menu-layout/ui/main-menu-layout.component').then(c => c.MainMenuLayoutComponent),
    children: [
      {
        path: AppRoutes.SMARTPHONES,
        title: 'Smartphones',
        loadComponent: () => import('@pages/smartphones/smartphones.component').then(c => c.SmartphonesComponent),
      },
    ],
    canActivate: [],
  },
  {
    path: AppRoutes.AUTH,
    title: 'Authentication',
    loadComponent: () => import('@pages/auth/auth-page/auth-page.component').then(c => c.AuthPageComponent),
  },
  {
    path: '**',
    redirectTo: 'smartphones',
  },
];
