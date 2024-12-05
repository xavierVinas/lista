import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './features/auth/register/register.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ListasComponent } from './features/list/views/listas/listas.component';
import { ListaDetalleComponent } from './features/list/views/lista-detalle/lista-detalle.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listas', component: ListasComponent, canActivate: [AuthGuard] },
  {
    path: 'lista/:id',
    component: ListaDetalleComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
