import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListasComponent } from './listas/listas.component';
import { ListaDetalleComponent } from './lista-detalle/lista-detalle.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ListComponent } from './features/list/views/list/list.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'list-test', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listas', component: ListasComponent, canActivate: [AuthGuard] },
  {
    path: 'lista/:id',
    component: ListaDetalleComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
