import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/class/cliente';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  client : Cliente = new Cliente();
  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registerClient(){
    this.clientService.registerClient(this.client).subscribe(response => {
      console.log(response)
      this.getClientList()
    },error => console.log(error))
  }

  getClientList(){
    this.router.navigate(['/client-list'])
  }

  onSubmit(){
    this.registerClient()
  }

}
