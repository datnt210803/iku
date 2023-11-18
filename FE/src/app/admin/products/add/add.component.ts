import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { CategoriesServiceService } from 'src/app/services/categories-service.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  categories: any[] = [];
  name: string | undefined
  price: number | undefined
  desc: string | undefined
  author: string | undefined
  id_category: string | undefined
  image: string | undefined
  constructor(private productService: ProductsService, private router: Router, private categoryService: CategoriesServiceService) {

  }
  ngOnInit() {
    this.loadCategories();
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
  add() {
    const newProduct: IProduct = {
      name: this.name!,
      price: this.price!,
      desc: this.desc!,
      author: this.author!,
      id_category: this.id_category!,
      image: this.image!
    }
    this.productService.addProduct(newProduct).subscribe(
      () => [this.router.navigate(["/"])]
    )
  }
}
