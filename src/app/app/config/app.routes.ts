import { Routes } from '@angular/router';
import {MainMenuLayoutComponent} from '@pages/layouts/main-menu-layout/main-menu-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainMenuLayoutComponent,
    children: [],
  }
];
