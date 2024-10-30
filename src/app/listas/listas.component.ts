import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ListasService } from '../listas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css'],
})
export class ListasComponent implements OnInit, OnDestroy {
  listas: any[] = [];
  nuevaListaNombre: string | null = null;
  nuevaListaNombreCorreccion: string | null = null;
  private listasSubscription: Subscription = new Subscription();

  constructor(private listasService: ListasService, private router: Router) {}

  ngOnInit(): void {
    this.listasSubscription = this.listasService
      .obtenerListas()
      .subscribe((listas) => {
        this.listas = listas;
      });
  }

  verLista(id: number): void {
    this.router.navigate(['/lista', id]);
  }

  agregarLista(): void {
    if (this.nuevaListaNombre?.trim()) {
      this.listasService.agregarLista(this.nuevaListaNombre);
      this.nuevaListaNombre = null;
    }
  }

  agregarListaCorreccion(): void {
    if (this.nuevaListaNombreCorreccion?.trim()) {
      this.listasService.agregarLista(this.nuevaListaNombreCorreccion);
      this.nuevaListaNombreCorreccion = null;
    }
  }

  ngOnDestroy(): void {
    this.listasSubscription.unsubscribe();
  }
}
