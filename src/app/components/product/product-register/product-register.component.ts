import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/class/articulo';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent implements OnInit {

  product : Articulo = new Articulo();
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registerProduct(){
    this.productService.registerProduct(this.product).subscribe(response => {
      console.log(response)
      this.getClientList()
    },error => console.log(error))
  }

  getClientList(){
    this.router.navigate(['/product-list'])
  }

  onSubmit(){
    this.registerProduct()
  }

}
