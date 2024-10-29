import { Routes } from '@angular/router';
import { ListasComponent } from './listas/listas.component';
import { LoginComponent } from './login/login.component';
import { ListaDetalleComponent } from './lista-detalle/lista-detalle.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a la pantalla de login
  { path: 'login', component: LoginComponent }, // Ruta para el login
  { path: 'listas', component: ListasComponent }, // Asegúrate de tener la ruta de listas
  { path: 'lista/:id', component: ListaDetalleComponent }, // Detalle de la lista
];
