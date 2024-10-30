import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListasService } from '../listas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-detalle',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-detalle.component.html',
  styleUrl: './lista-detalle.component.css',
})
export class ListaDetalleComponent implements OnInit {
  lista: { id: number; nombre: string; items: string[] } | undefined;
  nuevoItem: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _listasService: ListasService
  ) {}

  ngOnInit() {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.lista = this._listasService.obtenerLista(id);
    } else {
      console.warn('ID inválido para la lista');
    }
  }

  agregarItem() {
    if (this.nuevoItem.trim() && this.lista) {
      this._listasService.agregarItemALista(this.lista.id, this.nuevoItem);
      this.nuevoItem = '';
    }
  }
}
