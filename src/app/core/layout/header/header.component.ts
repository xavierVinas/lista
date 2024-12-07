import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent implements OnInit {
  // quitar los inpuits
  @Input() username: string = ''; // traer username del servicio
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  constructor(private _auth: AuthService) {}

  // declaracion de variablaes y suscripciones
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    // this._auth.getUsername();
  }
  onLogout() {
    this._auth.logout();
  }
}
