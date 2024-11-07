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
  styleUrls: ['./lista-detalle.component.scss'],
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
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id !== null) {
      this.listaSubscription = this.listasService
        .obtenerListas()
        .subscribe((listas) => {
          this.lista = listas.find((lista) => lista.id === id);
        });
    }
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

