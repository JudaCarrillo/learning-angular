import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { HeaderComponent } from '@shared/Components/header/header.component';
import { CartService } from '@shared/Services/cart.service';
import { ProductComponent } from '@products/Components/product/product.component';
import { Product } from '@products/Interfaces/product.model';
import { ProductService } from '@products/Services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  products = signal<Product[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products as Product[]);
      },
      error: () => {
        this.products.set([]);
      },
    });
  }
}
