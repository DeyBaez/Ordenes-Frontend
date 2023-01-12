import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/class/articulo';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Articulo[];
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductList()
  }

  getProductList(){
    this.productService.getProductList().subscribe(response => {
      this.products = response;
    })
  }

  newProduct(){
    this.router.navigate(['/product-register'])
  }

  editProduct(id: number){
    this.router.navigate(['/product-update/'+id])
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(response => {
      console.log(response)
      this.getProductList()
    })
  }

}
