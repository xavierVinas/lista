import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './features/auth/register/register.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ListasComponent } from './features/list/views/listas/listas.component';
import { ListaDetalleComponent } from './features/list/views/lista-detalle/lista-detalle.component';
import { HomeComponent } from './features/home/views/home/home.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'listas',
        pathMatch: 'full',
      },
      { path: 'listas', component: ListasComponent },
      {
        path: 'lista/:id',
        component: ListaDetalleComponent,
      },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
