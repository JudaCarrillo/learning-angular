import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../Components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  fromChild(event: string) {
    console.log('estamos en el padre');
    console.log(event);
  }

  title: string = 'product';
  price: number = 11;
  img: string = 'https://picsum.photos/200/300';
}
