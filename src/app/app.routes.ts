import { Routes } from '@angular/router';
import { Pant1Component } from '../pages/pant1/pant1.component';
import { Pant3Component } from '../pages/pant3/pant3.component';
import { Pant4Component } from '../pages/pant4/pant4.component';
import { Pant2Component } from '../pages/pant2/pant2.component';

export const routes: Routes = [
    {
        path: 'Bienvenida',
        component: Pant1Component
    },
    {
        path: 'Contador',
        component: Pant2Component
    },
    {
        path: 'Carta',
        component: Pant3Component
    },
    {
        path: 'Fuegos',
        component: Pant4Component
    },
    {
        path: '**',
        redirectTo: 'Bienvenida'
    },
];
