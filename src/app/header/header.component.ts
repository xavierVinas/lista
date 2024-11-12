import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent {
  @Input() username: string = '';
  @Output() logout = new EventEmitter<void>(); 

  onLogout() {
    this.logout.emit(); 
  }
}
