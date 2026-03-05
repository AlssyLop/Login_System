import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth-home',
    loadComponent: () => import('./pages/auth-home/auth-home.page').then(m => m.AuthHomePage)
  },
  {
    path: '',
    redirectTo: 'auth-home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'forgot',
    loadComponent: () => import('./pages/forgot-password/forgot-password.page').then(m => m.ForgotPasswordPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
];
