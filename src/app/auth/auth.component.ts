import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../core/services/auth.service'; 

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], 
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  username = '';
  password = '';
  email = '';
  errorMessage = '';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login exitoso:', response);
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Error en el login: ' + error.message;
      }
    );
  }

  register(): void {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email,
    };
    this.authService.register(user).subscribe(
      (response) => {
        console.log('Registro exitoso:', response);
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Error en el registro: ' + error.message;
      }
    );
  }

  logout(): void {
    this.authService.logout();
    console.log('Sesión cerrada');
  }
}
