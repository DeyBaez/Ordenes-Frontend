import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/class/articulo';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  id:number;
  product:Articulo = new Articulo();
  constructor(
    private productService:ProductService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(response =>{
      this.product = response;
    },error => console.log(error));
  }

  getProductList(){
    this.router.navigate(['/product-list']);
  }

  onSubmit(){
    this.productService.updateProduct(this.product).subscribe(response => {
      this.getProductList();
    },error => console.log(error));
  }
}
