import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'chalkboard',
        loadComponent: () => import('./chalkboard/chalkboard.component').then(m => m.ChalkboardRemoteComponent)
    },
    {
        path: 'userflow',
        loadComponent: () => import('./user-flow/user-flow.component').then(m => m.UserFlowComponent)
    },
];
