import { Routes } from '@angular/router';
import { MoviesListComponent } from './modules/movies-list/movies-list.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: MoviesListComponent
    }
];
