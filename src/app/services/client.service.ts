import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../class/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = environment.api + 'clientes/'

  constructor(
    private httpClient : HttpClient
  ) { }

  getClientList (): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.baseURL+'getAll')
  }

  registerClient (cliente: Cliente): Observable<Object>{
    return this.httpClient.post(this.baseURL+'save', cliente)
  }
}
