import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private baseUrl = 'https://api.escuelajs.co/api/v1/products';

  constructor() {}

  getProducts() {
    return this.http.get(`${this.baseUrl}`);
  }
}
