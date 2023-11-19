import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: IProduct[] = []
  image = "https://sachcuvn.com/upload/banner_sachcuvn2.jpg"
  constructor(private productService: ProductsService) { }
  ngOnInit() {
    this.getProducts()
  }
  getProducts() {
    this.productService.getProduct().subscribe(
      (data) => {
        this.products = data;
        this.products.reverse();
      }
    );
  }
}
