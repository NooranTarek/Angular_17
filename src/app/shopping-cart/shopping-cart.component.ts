import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service.js';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  cartItems: any[] = [];

  constructor(public cartService: CartServiceService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.updateTotalPrices();
    });
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
  }

  incrementQuantity(item: any) {
    if (item.quantity < item.stock) {
      item.quantity++;
      this.cartService.updateCartCount();
      this.updateTotalPrices();
    } else {
      console.log(`Stock limit reached`);
    }
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.updateCartCount();
      this.updateTotalPrices();
    }
  }

  updateTotalPrices() {
    this.cartItems.forEach((item) => {
      item.totalPrice = item.quantity * item.price;
    });
  }
}
