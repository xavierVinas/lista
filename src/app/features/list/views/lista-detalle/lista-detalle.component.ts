import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../../core/layout/header/header.component';

@Component({
  selector: 'app-lista-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.scss'],
})
export class ListaDetalleComponent implements OnInit {
  lista:
    | {
        id: number;
        nombre: string;
        items: { texto: string; completado: boolean }[];
      }
    | undefined;
  nuevoItem: string = '';
  username: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // this.username = localStorage.getItem('username') ?? 'Usuario';
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.listasService.obtenerListas().subscribe((listas) => {
    //   this.lista = listas.find((lista) => lista.id === id);
    // });
  }

  agregarItem() {
    if (this.nuevoItem.trim() && this.lista) {
      const nuevoElemento = { texto: this.nuevoItem, completado: false };
      this.lista.items.push(nuevoElemento);
      this.nuevoItem = '';
    }
  }

  toggleCompletarItem(item: { texto: string; completado: boolean }) {
    item.completado = !item.completado;
  }

  volverAListas() {
    this.router.navigate(['/listas']);
  }

  onLogout() {}
}
