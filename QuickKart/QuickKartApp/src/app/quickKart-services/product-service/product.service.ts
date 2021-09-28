import { Injectable } from '@angular/core';
import { IProduct } from '../../quickKart-interfaces/IProduct';
import { HttpClient } from '@angular/common/http';

export class ProductService {

  products!: IProduct[];

  constructor(private http: HttpClient) { }

  getProducts() {
    this.products = [
      { "productId": "P101", "productName": "Lamborghini Gallardo Spyder", "categoryId": 1, "price": 18000000, "quantityAvailable": 10 },
      { "productId": "P102", "productName": "Ben Sherman Mens Necktie Silk Tie", "categoryId": 2, "price": 1847, "quantityAvailable": 20 },
      { "productId": "P103", "productName": "BMW Z4", "categoryId": 1, "price": 6890000, "quantityAvailable": 10 },
      { "productId": "P104", "productName": "Samsung Galaxy S4", "categoryId": 3, "price": 38800, "quantityAvailable": 100 }
    ]
    return this.products;
  }
}
