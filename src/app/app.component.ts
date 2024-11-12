import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ListasComponent } from './listas/listas.component';
import { ListaDetalleComponent } from './lista-detalle/lista-detalle.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListaComponent,
    TableModule,
    FormsModule,
    LoginComponent,
    ListaDetalleComponent,
    ListasComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lista-app';
}

/** @FIX
 *
 * Estructura básica de carpetas
 *
 *    Core => contenido del proyecto que no se va a mover nunca fuera entran servicios, modelos(interfaces), guards, interceptores para las peticiones etc
 *
 *    Features o Modules => Las diferenctes ramas de la app, el login sería un módulo o una feature, estas deben contener:
 *
 *               Modules o Features => un componente principal, dos carpetas => commons y views o containers o pages, el router
 *
 *                                  componente principal => tiene un router-outlet que te deja navegar entre las otras paginas
 *                                  commons =>  compontentes independientes, puede incluir tambien servicios especificos de esta parte, modelos especificos ( se suele poner todo en el core, pero se pueden hacer modulos totalmente independientes )
 *                                  views o pages o containers =>  Páginas para la visualización de los componentes
 */
