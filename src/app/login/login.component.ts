import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule], 
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
   
    // if (this.username === 'user' && this.password === 'password') {
      this.router.navigate(['/listas']);
    // } else {
    //   alert('Credenciales inválidas');
    // }
  }
}
