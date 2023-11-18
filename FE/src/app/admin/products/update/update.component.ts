import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { CategoriesServiceService } from 'src/app/services/categories-service.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  id: string | undefined
  product: IProduct | undefined
  categories: any[] = [];
  name: string | undefined
  price: number | undefined
  desc: string | undefined
  author: string | undefined
  id_category: string | undefined
  image: string | undefined
  constructor(private productService: ProductsService, private router: Router, private route: ActivatedRoute, private categoryService: CategoriesServiceService) {

  }
  ngOnInit() {
    this.loadCategories();
    this.route.params.subscribe(
      params => {
        this.id = params["id"]
        this.productService.getProductById(this.id!).subscribe(
          (data) => {
            this.product = data;
            this.name = data.name || '';
            this.price = data.price;
            this.desc = data.desc || '';
            this.author = data.author || '';
            this.id_category = data.id_category || '';
            this.image = data.image || '';
          }
        )
      }
    )
  }
  loadCategories() {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  update() {
    const newProduct: IProduct = {
      name: this.name!,
      price: this.price!,
      desc: this.desc!,
      author: this.author!,
      id_category: this.id_category!,
      image: this.image!
    }
    this.productService.updateProduct(this.id!, newProduct).subscribe(
      () => [this.router.navigate(["/"])]
    )
  }
}
