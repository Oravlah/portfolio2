import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout/layout.component'),
    children: [
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        loadComponent: () => import('./pages/inicio/inicio.component')
      },
      {
        path: 'sobremi',
        loadComponent: () => import('./pages/sobremi/sobremi.component')
      },
      {
        path: 'habilidades',
        loadComponent: () => import('./pages/habilidades/habilidades.component')
      },
      {
        path: 'herramientas',
        loadComponent: () => import('./pages/herramientas/herramientas.component')
      }
    ]
  },
];
