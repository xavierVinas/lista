import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListasService } from '../listas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-detalle',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-detalle.component.html',
  styleUrl: './lista-detalle.component.css',
})
export class ListaDetalleComponent implements OnInit, OnDestroy {
  lista: { id: number; nombre: string; items: string[] } | undefined;
  nuevoItem: string = '';
  private listaSubscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private listasService: ListasService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.listaSubscription = this.listasService
      .obtenerListas()
      .subscribe((listas) => {
        this.lista = listas.find((lista) => lista.id === id);
      });
  }

  agregarItem() {
    if (this.nuevoItem.trim() && this.lista) {
      this.listasService.agregarItemALista(this.lista.id, this.nuevoItem);
      this.nuevoItem = '';
    }
  }

  ngOnDestroy(): void {
    this.listaSubscription.unsubscribe(); 
  }
}
