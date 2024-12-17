import {
  Component,
  input,
  Input,
  InputSignal,
  output,
  OutputEmitterRef,
  Signal,
} from '@angular/core';
import { Button } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { SpeedDial } from 'primeng/speeddial';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [Button, ProgressBarModule, Menu],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.scss',
})
export class ListCardComponent {
  public name: InputSignal<string> = input.required<string>();
  public edit: OutputEmitterRef<void> = output();
  public delete: OutputEmitterRef<void> = output();

  public items: MenuItem[] = [
    {
      label: 'Acciones',
      items: [
        {
          label: 'Editar',
          icon: 'pi pi-pencil',
        },
        {
          label: 'Eliminar',
          icon: 'pi pi-trash',
          command: () => {
            this.delete.emit();
          },
        },
      ],
    },
  ];
}
