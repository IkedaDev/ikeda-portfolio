import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('@layouts/portfolio/portfolio-layout.component').then( x => x.PortfolioLayoutComponent),
        children:[
            {
                path:'',
                loadComponent: () => import("@pages/portfolio/welcome/welcome-page.component").then( x => x.WelcomePageComponent),
            },
            {
                path:'**',
                redirectTo:'',
                pathMatch:'full'
            }
        ]
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
