import { Routes } from '@angular/router';
import { Resenha } from './resenha/resenha';
import { Tropa } from './tropa/tropa';
import { Galera } from './galera/galera';

export const routes: Routes = [
    //[] é um vetor
    { path: 'resenha', component: Resenha },
    { path: 'tropa', component: Tropa },
    { path: 'galera', component: Galera },
];
