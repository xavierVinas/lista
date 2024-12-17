import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ListCardComponent } from '../../commons/components/list-card/list-card.component';
import { ListsService } from '../../../../core/services/lists.service';
import { List } from '../../../../core/models/lists/lists.models';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-listas',
  standalone: true,
  imports: [FormsModule, CommonModule, ListCardComponent, ConfirmDialog],
  providers: [ConfirmationService],
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  lists$!: Observable<List[]>;
  constructor(
    private _lists: ListsService,
    private _confirmationService: ConfirmationService
  ) {}

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

  private deleteList(id: number): void {
    this._lists.deleteLists(id).subscribe(() => {
      this.getList();
    });
  }
  private getList(): void {
    this.lists$ = this._lists.getLists();
  }
}
