import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  WritableSignal,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ListCardComponent } from '../../commons/components/list-card/list-card.component';
import { ListsService } from '../../../../core/services/lists.service';
import { List } from '../../../../core/models/lists/lists.models';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardConfigComponent } from '../../commons/components/card-config/card-config.component';

@Component({
  selector: 'app-listas',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ListCardComponent,
    ConfirmDialog,
    Dialog,
    ButtonModule,
    CardConfigComponent,
  ],
  providers: [ConfirmationService],
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  public lists$!: Observable<List[]>;
  public showCardDialog: boolean = false;
  public editingCard: WritableSignal<List | null> = signal<List | null>(null);
  constructor(
    private _lists: ListsService,
    private _confirmationService: ConfirmationService
  ) {}

  get getHeaderTitle(): string {
    return this.editingCard() ? 'Crear lista' : 'Editar lista';
  }

  public ngOnInit(): void {
    this.getList();
  }

  public confirmDeleteList(id: number) {
    this._confirmationService.confirm({
      key: 'confirm-delete-list',
      message: '¿Estás seguro de eliminar esta lista?',
      header: 'Cuidado',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Eliminar',
        severity: 'danger',
      },

      accept: () => {
        this.deleteList(id);
      },
    });
  }

  public saveCardConfig(list: Pick<List, 'id' | 'name'>): void {
    this.showCardDialog = false;
    this.editingCard.set(null);
    const action$ = list.id
      ? this._lists.updateList(list.id, list.name)
      : this._lists.createList(list.name);
    action$.subscribe(() => this.getList());
  }

  private deleteList(id: number): void {
    this._lists.deleteLists(id).subscribe(() => {
      this.getList();
    });
  }
  private getList(): void {
    this.lists$ = this._lists.getLists();
  }
}
