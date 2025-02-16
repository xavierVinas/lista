import {
  Component,
  input,
  InputSignal,
  OnChanges,
  output,
  OutputEmitterRef,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { List } from '../../../../../core/models/lists/lists.models';

@Component({
  selector: 'app-card-config',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './card-config.component.html',
  styleUrl: './card-config.component.scss',
})
export class CardConfigComponent implements OnChanges {
  public list: InputSignal<List | null | undefined> = input<List | null>();
  public saveCard: OutputEmitterRef<Pick<List, 'id' | 'name'>> =
    output<Pick<List, 'id' | 'name'>>();

  public fb: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
  });

  constructor() {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['list'].currentValue) {
      this.fb.patchValue(changes['list'].currentValue);
    }
  }

  public submitForm(): void {
    this.saveCard.emit(this.fb.getRawValue());
    this.fb.reset();
  }
}
