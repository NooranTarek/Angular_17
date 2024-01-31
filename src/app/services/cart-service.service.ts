import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsComponent } from '../products/products.component.js';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  constructor() {}
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  
  public updateCartCount() {
    const currentCartItems = this.cartItemsSubject.value;
    const totalCount = currentCartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    this.cartCountSubject.next(totalCount);
  }


  incrementCartCount() {
    const currentCount = this.cartCountSubject.value;
    this.cartCountSubject.next(currentCount + 1);
  }

  addToCart(product: any) {
    const currentCartItems = this.cartItemsSubject.value;
    const existingItem = currentCartItems.find(
      (item) => item.id === product.id
    );
    if (existingItem) {
      const newQuantity = (existingItem.quantity += 1);
      if (newQuantity <= existingItem.stock) {
        existingItem.quantity = newQuantity;
      } else {
        existingItem.quantity = existingItem.stock;
      }
      existingItem.price = existingItem.quantity * existingItem.price;
      this.cartItemsSubject.next([...currentCartItems]);
      this.updateCartCount();

    } else {
      const updatedCartItems = [
        ...currentCartItems,
        { ...product, quantity: 1 },
      ];
      this.cartItemsSubject.next(updatedCartItems);
      this.updateCartCount();

    }
    console.log(this.cartItems$);

  }

  removeFromCart(product: any) {
    const currentCartItems = this.cartItemsSubject.value;
    const updatedCartItems = currentCartItems.filter(
      (item) => item.id !== product.id
    );
    this.cartItemsSubject.next(updatedCartItems);
    this.updateCartCount();

  }


}
