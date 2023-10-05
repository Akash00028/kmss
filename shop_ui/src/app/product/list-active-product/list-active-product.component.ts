import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-active-product',
  templateUrl: './list-active-product.component.html',
  styleUrls: ['./list-active-product.component.css']
})
export class ListActiveProductComponent implements OnInit {
  products! : Product[];

  constructor(private productService : ProductService, private router : Router){}

  ngOnInit(): void {

    this.getProduct();
    
  }
  private getProduct(){
    this.productService.getAllProduct().subscribe(data =>{
      this.products = data;
    })
  };
  updateProduct(id : number){
    this.router.navigate(['update-product', id]);
  }

  deleteProduct(id:number)
  {
    this.productService.deletePerson(id).subscribe(data =>{
      console.log(data);
      this.getProduct();
    })
  }
}
