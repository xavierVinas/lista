import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ListasService } from '../../../../core/services/listas.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ListCardComponent } from '../../commons/components/list-card/list-card.component';
import { ListsService } from '../../../../core/services/lists.service';
import { List } from '../../../../core/models/lists/lists.models';

@Component({
  selector: 'app-listas',
  standalone: true,
  imports: [FormsModule, CommonModule, ListCardComponent],
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  lists$!: Observable<List[]>;
  constructor(private _lists: ListsService) {}

  ngOnInit(): void {
    this.lists$ = this._lists.getLists();
  }
}
