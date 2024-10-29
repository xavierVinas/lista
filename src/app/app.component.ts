import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'; 

import { ListaDetalleComponent } from './lista-detalle/lista-detalle.component';
import { ListasComponent } from './listas/listas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaComponent, TableModule,FormsModule,LoginComponent,ListaDetalleComponent,ListasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lista-app';
}
