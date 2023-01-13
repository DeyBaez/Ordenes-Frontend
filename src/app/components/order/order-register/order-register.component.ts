import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/class/articulo';
import { Cliente } from 'src/app/class/cliente';
import { Orden } from 'src/app/class/orden';
import { OrdenDetalle } from 'src/app/class/orden-detalle';
import { ClientService } from 'src/app/services/client.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-register',
  templateUrl: './order-register.component.html',
  styleUrls: ['./order-register.component.css']
})
export class OrderRegisterComponent implements OnInit {

  clients: Cliente[];
  products: Articulo[];
  orders: OrdenDetalle[] = [];
  order : Orden = new Orden();
  cantidad: number
  product: Articulo = new Articulo()
  client: Cliente = new Cliente()
  errorStock = false

  constructor(
    private clientService: ClientService,
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getClientList()
    this.getProductList()
  }

  getClientList(){
    this.clientService.getClientList().subscribe(response => {
      this.clients = response;
    })
  }

  getProductList(){
    this.productService.getProductList().subscribe(response => {
      this.products = response;
      console.log(this.products)
    })
  }

  getOrderList(){
    this.router.navigate(['/order-list'])
  }

  setProduct(newValue: any){
    this.product = newValue
  }

  setClient(newValue: any){
    this.client = newValue
  }

  addDetail(){
    var orderDetalle = new OrdenDetalle();
    orderDetalle.cantidad = this.cantidad
    orderDetalle.idProduct = this.product.id
    orderDetalle.nombre = this.product.nombre
    orderDetalle.precioUnitario = this.product.precioUnitario
    orderDetalle.total = this.cantidad * this.product.precioUnitario
    this.orders.push(orderDetalle)
  }

  registerOrder(){
    
    this.order.nombreCliente = this.client.nombre + ' ' + this.client.apellido
    this.order.ordenDetalles = this.orders
    console.log(this.order)
    this.orderService.registerOrder(this.order).subscribe(response => {
      console.log(response)
      this.getOrderList()
    }, error => {
      this.errorStock = true
      console.log("error-- " + JSON.stringify(error))
    })
  }

  onSubmit(){
    this.registerOrder()
  }

}
