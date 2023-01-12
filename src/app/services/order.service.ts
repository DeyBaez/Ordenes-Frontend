import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Orden } from '../class/orden';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseURL = environment.api + 'ordenes/'

  constructor(
    private httpClient : HttpClient
  ) { }

  getOrderList (): Observable<Orden[]>{
    return this.httpClient.get<Orden[]>(this.baseURL+'getAll')
  }

  registerOrder (orden: Orden): Observable<Object>{
    return this.httpClient.post(this.baseURL+'save', orden)
  }
}
