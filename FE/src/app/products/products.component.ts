import { I18nPluralPipe } from '@angular/common';
import { Component } from '@angular/core';
import { IProduct } from '../interface/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: IProduct[] = []
  constructor(private productService: ProductsService) {
    this.productService.getProduct().subscribe(
      (data) => {
        this.products = data
        console.log(data);

      }
    )
  }
  delete(id: string) {
    this.productService.deleteProduct(id).subscribe(
      () => {
        this.products = this.products.filter(item => item.id != id)
      }
    )
  }

}
