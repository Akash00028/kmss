import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  productName!: string;
  minPrice!: number;
  maxPrice!: number;
  minPostedDate!: string;
  maxPostedDate!: string;
  searchResults!: Product[];

  constructor(private productService: ProductService) { }

  onSearch() {
    this.productService.searchProducts(
      this.productName,
      this.minPrice,
      this.maxPrice,
      this.minPostedDate,
      this.maxPostedDate
    ).subscribe(
      (results: Product[]) => {
        this.searchResults = results;
      },
      (error) => {
        
        console.error(error);
      }
    );
  }
}
