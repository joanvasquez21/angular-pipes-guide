import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'basic',
        title: 'pipes basics',
        loadComponent: () => import('./pages/basic-page/basic-page.component')
    },
    {
        path: 'numbers',
        title: 'numbers pipes',
        loadComponent: () => import('./pages/numbers-page/numbers-page.component')
    },
    {
        path: 'uncommon',
        title: 'pipes no tan comunes',
        loadComponent: () => import('./pages/uncommon-page/uncommon-page.component')
    },
    {
        path: 'custom',
        title: 'pipes personalizados',
        loadComponent: () => import('./pages/custom-page/custom-page.component')
    },
    {
        path: '**',
        redirectTo: 'basic'
    }
];
