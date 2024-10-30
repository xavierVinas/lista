import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListasService {
  private listasSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  listas$: Observable<any[]> = this.listasSubject.asObservable();

  constructor() {
    this.listasSubject.next([
      { id: 1, nombre: 'Lista Compra', items: ['carne', 'pescado'] },
      { id: 2, nombre: 'Lista Tareas', items: ['Barrer', 'Bailar'] },
    ]);
  }

  obtenerListas(): Observable<any[]> {
    return this.listas$;
  }

  obtenerLista(id: number): any | undefined {
    return this.listasSubject.value.find((lista) => lista.id === id);
  }

  agregarLista(nombre: string): void {
    const nuevaLista = { id: Date.now(), nombre, items: [] };
    const listasActualizadas = [...this.listasSubject.value, nuevaLista];
    this.listasSubject.next(listasActualizadas);
  }

  agregarItemALista(id: number, item: string): void {
    const listasActualizadas = this.listasSubject.value.map((lista) => {
      if (lista.id === id) {
        return { ...lista, items: [...lista.items, item] };
      }
      return lista;
    });
    this.listasSubject.next(listasActualizadas);
  }
}
