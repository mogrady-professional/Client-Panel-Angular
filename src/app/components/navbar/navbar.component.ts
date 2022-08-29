import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';
import { ClientService } from 'src/app/services/client.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Client } from '../../models/Clients';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // isLoggedIn: boolean;
  // loggedInUser: string;
  // showRegister: boolean;
  isLoggedIn: boolean;
  loggedInUser: string | undefined | null;
  showRegister?: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private settingsService: SettingsService
  ) {
    this.isLoggedIn = false;
    this.loggedInUser = '';
    this.showRegister = false;
  }

  ngOnInit() {
    this.authService.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
    this.showRegister = this.settingsService.getSettings().allowRegistration;
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are now logged out', {
      cssClass: 'alert-success',
      timeout: 4000,
    });
    this.router.navigate(['/login']);
  }
}
