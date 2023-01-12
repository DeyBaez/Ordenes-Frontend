import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orden } from 'src/app/class/orden';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
 
  orders: Orden[];
  constructor(
    private orderService: OrderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getOrderList()
  }

  getOrderList(){
    this.orderService.getOrderList().subscribe(response => {
      this.orders = response;
    })
  }

  newOrder(){
    this.router.navigate(['/order-register'])
  }

}
