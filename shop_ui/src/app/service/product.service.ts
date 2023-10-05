import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient :HttpClient) { }

  baseURL ="http://localhost:9090/api/products"

  getAllProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  } 
  createProduct(product : Product): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, product);
  }

  getProductById(id : number) : Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }
  updateProduct(id: number , product : Product): Observable<Product>{
    return this.httpClient.put<Product>(`${this.baseURL}/${id}`,product);
  }

  deletePerson(id : number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  getAllPendeingProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}/approval-queue`);
  } 
  approval(id: number): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}/approve`, {});
  }
  reject(id : number):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}/reject`,{});
  }

  searchProducts(
    productName?: string,
    minPrice?: number,
    maxPrice?: number,
    minPostedDate?: string,
    maxPostedDate?: string
  ): Observable<Product[]> {
    let params = new HttpParams();
    if (productName) {
      params = params.set('productName', productName);
    }
    if (minPrice) {
      params = params.set('minPrice', minPrice.toString());
    }
    if (maxPrice) {
      params = params.set('maxPrice', maxPrice.toString());
    }
    if (minPostedDate) {
      params = params.set('minPostedDate', minPostedDate.toString());
    }
    if (maxPostedDate) {
      params = params.set('maxPostedDate', maxPostedDate.toString());
    }

    return this.httpClient.get<Product[]>(`${this.baseURL}/search`, { params });
  }
}
