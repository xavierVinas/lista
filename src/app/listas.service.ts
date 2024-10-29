// src/app/listas.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListasService {
  // @FIX no tipes en la misma linea, crea siempre un modelo con un interface => private listas: List[] = [...]
  private listas: { id: number; nombre: string; items: string[] }[] = [
    {
      id: 1,
      nombre: 'Lista de Compras',
      items: ['Leche de mipalo', 'Panallets', 'Huevos'],
    },
    {
      id: 2,
      nombre: 'Lista de Tareas',
      items: ['Limpiar nabo', 'Estudiar', 'Comprar'],
    },
  ];

  constructor() {}

  //@FIX typa siempre los metodos ya sean publicos o privados y typa siempre lo que devuelve si no devuelve nada tambien se tipa con un void => public metodo(): void {}

  obtenerListas() {
    return this.listas;
  }

  public obtenerListasCorreccion(): {
    // @FIX habría que tipar con un interface
    id: number;
    nombre: string;
    items: string[];
  }[] {
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
