import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/Clients';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  totalOwed?: number;

  constructor(private clientService: ClientService) {
    this.clients = [];
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
      this.getTotalOwed();
      console.log(clients);
    });
  }

  getTotalOwed() {
    // higher order array method :; reduce works similar to foreach

    this.totalOwed = this.clients.reduce((total, client) => {
      return total + client.balance!;
    }, 0);
  }
}
