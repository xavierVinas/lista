import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  item: string = '';
  items: string[] = [];

  agregarItem() {
    if (this.item.trim()) {
      this.items.push(this.item);
      this.item = '';
    }
  }

  eliminarItem(index: number) {
    this.items.splice(index, 1);
  }

  // Función trackBy
  trackByIndex(index: number, item: string): number {
    return index; // Retorna el índice como identificador
  }
}
