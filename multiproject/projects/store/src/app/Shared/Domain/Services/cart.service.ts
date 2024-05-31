import { Injectable, computed, signal } from '@angular/core';
import { Product } from '@products/Interfaces/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });

  constructor() {}

  addToCart(product: Product) {
    this.cart.update((cart) => [...cart, product]);
  }

  removeFromCart(product: Product) {
    this.cart.update((cart) => cart.filter((p) => p.id !== product.id));
  }
}
