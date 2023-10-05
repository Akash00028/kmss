import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
product : Product = new Product();

constructor(private productService : ProductService, private router: Router){ }

ngOnInit() : void{
    
}
saveProduct(){
  this.productService.createProduct(this.product).subscribe
  (data => {console.log(data);
    this.goToActiveList();
  }, 
  error => console.log(error)
  );
}
goToActiveList(){
  this.router.navigate(['/product-list'])
}
OnSubmit(){
  console.log(this.product);
  this.saveProduct();
}
}
