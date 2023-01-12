import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articulo } from '../class/articulo';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = environment.api + 'articulos/'

  constructor(
    private httpClient : HttpClient
  ) { }

  getProductList (): Observable<Articulo[]>{
    return this.httpClient.get<Articulo[]>(this.baseURL+'getAll')
  }

  registerProduct (articulo: Articulo): Observable<Object>{
    return this.httpClient.post(this.baseURL+'save', articulo)
  }

  updateProduct (articulo: Articulo): Observable<Object>{
    return this.httpClient.put(this.baseURL+'update', articulo)
  }

  getProductById (id: number): Observable<Articulo>{
    return this.httpClient.get<Articulo>(this.baseURL+'getById/'+id)
  }

  deleteProduct (id: number): Observable<Object>{
    return this.httpClient.delete(this.baseURL+'delete/'+id)
  }
}
