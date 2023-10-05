import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-pendind-product',
  templateUrl: './list-pendind-product.component.html',
  styleUrls: ['./list-pendind-product.component.css']
})
export class ListPendindProductComponent implements OnInit {
  products! : Product[];

  constructor(private productService : ProductService, private router : Router){}

  ngOnInit(): void {

    this.getProduct();
    
  }
  private getProduct(){
    this.productService.getAllPendeingProduct().subscribe(data =>{
      this.products = data;
    })
  };
  approvalProduct(id : number){
    this.productService.approval(id).subscribe(data =>{
      console.log(data);
      this.getProduct();
    })
  }

  rejectProduct(id:number)
  {
    this.productService.reject(id).subscribe(data =>{
      console.log(data);
      this.getProduct();
    })
  }
}