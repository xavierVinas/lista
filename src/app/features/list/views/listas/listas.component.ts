import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ListasService } from '../../../../core/services/listas.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ListCardComponent } from '../../commons/components/list-card/list-card.component';

@Component({
  selector: 'app-listas',
  standalone: true,
  imports: [FormsModule, CommonModule, ListCardComponent],
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit, OnDestroy {
  lists: any[] = [];
  nuevaListaNombre: string | null = null;
  private listasSubscription: Subscription = new Subscription();

  constructor(
    private listasService: ListasService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.listasSubscription = this.listasService
      .obtenerListas()
      .subscribe((listas) => {
        this.lists = listas;
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

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.listasSubscription.unsubscribe();
  }
}
