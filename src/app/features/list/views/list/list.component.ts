import { Component } from '@angular/core';
import { ListFilterComponent } from '../../commons/components/list-filter/list-filter.component';
import { ListCardComponent } from '../../commons/components/list-card/list-card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListFilterComponent, ListCardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {}
