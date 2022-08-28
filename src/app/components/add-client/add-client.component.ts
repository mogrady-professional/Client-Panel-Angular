import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../../models/Clients';
import { FlashMessagesService } from 'flash-messages-angular';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0,
  };

  disableBalanceOnAdd: boolean = true;

  @ViewChild('clientForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router
  ) {
    this.client = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      balance: 0,
    };
  }

  ngOnInit(): void {
    // this.disableBalanceOnAdd = this.clientService.getSettings().disableBalanceOnAdd;
  }

  onSubmit({ value, valid }: NgForm) {
    // console.log(value, valid);
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }

    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 4000,
      });
    } else {
      // Add New Client
      this.clientService.newClient(value);

      // Show Message
      this.flashMessage.show('New client added', {
        cssClass: 'alert-success',
        timeout: 4000,
      });
      this.form.resetForm();

      // Redirect to Dashboard
      this.router.navigate(['/']);
    }
  }
}
