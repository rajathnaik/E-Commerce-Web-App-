import { Component, OnInit } from '@angular/core';
import { IProduct } from '../quickKart-interfaces/IProduct';
import { ProductService } from '../quickKart-services/product-service/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  products!: IProduct[];
  showMsg!: string;
  productService!: ProductService;

  constructor() { }


  ngOnInit(): void {

    this.getProd();
    //this.products = [
    //  { "productId": "P101", "productName": "Lamborghini Gallardo Spyder", "categoryId": 1, "price": 18000000, "quantityAvailable": 10 },
    //  { "productId": "P102", "productName": "Ben Sherman Mens Necktie Silk Tie", "categoryId": 2, "price": 1847, "quantityAvailable": 20 },
    //  { "productId": "P103", "productName": "BMW Z4", "categoryId": 1, "price": 6890000, "quantityAvailable": 10 },
    //  { "productId": "P104", "productName": "Samsung Galaxy S4", "categoryId": 3, "price": 38800, "quantityAvailable": 100 }
    //]

    if(this.products == null) {
      this.showMsg = "No Products Available";
    }

  }

  getProd() {
    this.products = this.productService.getProducts();
  }
  

}
