// src/app/listas.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListasService {
  private listas: { id: number; nombre: string; items: string[] }[] = [
    { id: 1, nombre: 'Lista de Compras', items: ['Leche de mipalo', 'Panallets', 'Huevos'] },
    {
      id: 2,
      nombre: 'Lista de Tareas',
      items: ['Limpiar nabo', 'Estudiar', 'Comprar'],
    },
  ];

  constructor() {}

  obtenerListas() {
    return this.listas;
  }

  obtenerLista(id: number) {
    return this.listas.find((lista) => lista.id === id);
  }

  agregarLista(nombre: string) {
    const nuevaLista = { id: this.listas.length + 1, nombre, items: [] };
    this.listas.push(nuevaLista);
  }

  agregarItemALista(id: number, item: string) {
    const lista = this.obtenerLista(id);
    lista?.items.push(item);
  }
}
