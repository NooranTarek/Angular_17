import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
   apiUrl = 'https://dummyjson.com/products';
  constructor(private http : HttpClient) { }
 // getProducts(): Observable<any> {
   // return this.http.get(this.apiUrl);
  //}
  getProducts(){
    return this.http.get(`${this.apiUrl}`);
   // return this.http.get('https://dummyjson.com/products');

  }
}
