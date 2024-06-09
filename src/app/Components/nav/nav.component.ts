import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
