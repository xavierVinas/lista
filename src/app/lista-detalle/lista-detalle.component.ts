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

  //@FIX la genete normalmente importa los servicios como si fueran una variable mas route: XXX a mi me gusta mas poner una _ delante del nombre para identifdicar rapido lo que es un sercicio y lo que no
  // _listasService: ListasService o simplemente => _listas
  // esto ya va a gustos, pero es mucho mas facil cuando escribes this._ te va a salir toda la lista de servicios, hay componentes grandes a veces
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
