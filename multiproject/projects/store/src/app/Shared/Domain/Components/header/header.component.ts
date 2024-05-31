import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
  signal,
} from '@angular/core';
import { Product } from '@products/Interfaces/product.model';
import { CartService } from '@shared/Services/cart.service';

interface ItemQuantityMap {
  [id: string]: number;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }
}
