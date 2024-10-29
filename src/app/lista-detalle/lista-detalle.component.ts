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
    private route: ActivatedRoute,
    private listasService: ListasService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.lista = this.listasService.obtenerLista(id);
  }

  agregarItem() {
    if (this.nuevoItem.trim() && this.lista) {
      this.listasService.agregarItemALista(this.lista.id, this.nuevoItem);
      this.nuevoItem = '';
    }
  }
}