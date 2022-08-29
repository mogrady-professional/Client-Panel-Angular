import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';
import { ClientService } from 'src/app/services/client.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Settings } from '../../models/Settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settings = this.settingsService.getSettings();

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }
  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.flashMessage.show('Settings saved', {
      cssClass: 'alert-success',
      timeout: 4000,
    });
    this.router.navigate(['/settings']);
  }
}
