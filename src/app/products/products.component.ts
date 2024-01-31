import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service.js';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() productItem: any;
  //@Output() sendToParent = new EventEmitter<string>();
  constructor(private router : Router,private cartService: CartServiceService){}

  redirectToDetails(id : string){
    this.router.navigate(['productDetails' , id])
    console.log(id);
    
 }
 addToCart(product: any) {
  this.cartService.incrementCartCount();
  this.cartService.addToCart(product);
}
}
