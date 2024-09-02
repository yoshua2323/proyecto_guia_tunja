import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página principal
  { path: '**', redirectTo: '' } // Redirecciona cualquier ruta desconocida a la página principal
];
