import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'lista-app';

  constructor(private _theme: ThemeService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this._theme.intializeTheme();
    }, 0);
  }
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
