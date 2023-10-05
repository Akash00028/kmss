import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit  {

  id! : number;
  product:Product = new Product()

  constructor(private productService: ProductService,
    private route : ActivatedRoute, private router:Router){}

  ngOnInit(): void {
      this.id= this.route.snapshot.params['id'];
      this.productService.getProductById(this.id).subscribe(data => {
        console.log(this.product);
        this.product = data;
       
      }, error => console.log(error));
  }

  OnSubmit(){
    this.productService.updateProduct(this.id,this.product).subscribe(data  =>{
      console.log(this.product);
      this.goToProductList();  
    },
    error => console.log(error));
  }
  goToProductList(){
    this.router.navigate(['/product-list']);
  }

}
