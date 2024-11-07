import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, TableModule],
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
}
