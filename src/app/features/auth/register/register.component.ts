import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _auth: AuthService
  ) {
    this.registerForm = this.fb.group({
      name: new FormControl<string>('', [Validators.required]),
      surname: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', [Validators.required]),
    });
  }

  register() {
    const user = this.registerForm.value;

    this._auth
      .register(user)
      .subscribe((data) => console.log(' 2 la respuesta del server =>', data)); //redireccionar al login
  }
}
