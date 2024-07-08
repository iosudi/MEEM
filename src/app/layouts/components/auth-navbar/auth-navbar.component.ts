import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.scss'],
})
export class AuthNavbarComponent {
  isShown: boolean = false;

  showNavbar() {
    this.isShown = true;
  }
  hideNavbar() {
    this.isShown = false;
  }
}
