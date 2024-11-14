import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserStorage } from '../core/models/enums/user.enum';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    // trasladar la logica al servicio
    const { username, password } = this.loginForm.value;
    const storedUsername = localStorage.getItem(UserStorage.USERNAME);
    const storedPassword = localStorage.getItem('password');

    if (
      this.loginForm.valid &&
      username === storedUsername &&
      password === storedPassword
    ) {
      this.router.navigate(['/listas']);
    } else {
      alert('Credenciales incorrectas');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
