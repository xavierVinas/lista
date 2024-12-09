import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user/user.models';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, OverlayPanelModule, ButtonModule],
})
export class HeaderComponent implements OnInit {
  public user!: User;
  constructor(private _auth: AuthService, private _router: Router) {}

  public ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void {
    this.user = this._auth.user;
  }
  public onLogout(): void {
    this._auth.logout();
    this._router.navigate(['/login']);
  }
}
