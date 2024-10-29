import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListasService } from '../listas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css'],
})
export class ListasComponent implements OnInit {
  listas: any[] = [];
  nuevaListaNombre: string = '';

  constructor(private listasService: ListasService, private router: Router) {}

  ngOnInit(): void {
    this.listas = this.listasService.obtenerListas();
  }

  verLista(id: number) {
    this.router.navigate(['/lista', id]);
  }

  agregarLista() {
    if (this.nuevaListaNombre.trim()) {
      this.listasService.agregarLista(this.nuevaListaNombre);
      this.nuevaListaNombre = '';
      this.listas = this.listasService.obtenerListas(); 
    }
  }
}
