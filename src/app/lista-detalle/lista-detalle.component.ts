import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ListasService } from '../listas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-lista-detalle',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.scss'],
})
export class ListaDetalleComponent {
  lista: { id: number; nombre: string; items: string[] } | undefined;
  nuevoItem: string = '';

  constructor(
    private route: ActivatedRoute,
    private listasService: ListasService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listasService.obtenerListas().subscribe((listas) => {
      this.lista = listas.find((lista) => lista.id === id);
    });
  }

  agregarItem() {
    if (this.nuevoItem.trim() && this.lista) {
      this.listasService.agregarItemALista(this.lista.id, this.nuevoItem);
      this.nuevoItem = ''; 
    }
  }

  volverAListas() {
    this.router.navigate(['/listas']); 
  }
}
