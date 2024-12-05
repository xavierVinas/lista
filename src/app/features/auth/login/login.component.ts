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
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _auth: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
    });
  }

  login() {
    const { username, password } = this.loginForm.value;

    if (this.loginForm.valid) {
      this._auth.login(username, password).subscribe(
        (data) => {
          console.log(data);
          localStorage.setItem('authToken', data.token);
          this.router.navigate(['/listas']);
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
          alert('Usuario o contraseña incorrectos.');
        }
      );
    } else {
      alert('competa todos los campos.');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
