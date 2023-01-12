import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/class/cliente';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Cliente[];
  constructor(
    private clientService: ClientService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getClientList()
  }

  getClientList(){
    this.clientService.getClientList().subscribe(response => {
      this.clients = response;
    })
  }

  newClient(){
    this.router.navigate(['/client-register'])
  }

}
