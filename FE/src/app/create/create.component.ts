import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from '../interface/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  name: string | undefined
  price: number | undefined
  desc: string | undefined
  constructor(private productService: ProductsService, private router: Router) {

  }
  add() {
    const newProduct: IProduct = {
      name: this.name!,
      price: this.price!,
      desc: this.desc!
    }
    this.productService.addProduct(newProduct).subscribe(
      () => [this.router.navigate(["/"])]
    )
  }
}
