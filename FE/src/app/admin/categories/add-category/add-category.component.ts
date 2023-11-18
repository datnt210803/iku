import { Component } from '@angular/core';
import {Router} from "@angular/router"
import { ICategory } from 'src/app/interface/category';
import { IProduct } from 'src/app/interface/product';
import { CategoriesServiceService } from 'src/app/services/categories-service.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  
  name: string | undefined
  constructor(private productService: ProductsService, private router: Router, private categoryService: CategoriesServiceService) {

  }
  add() {
    const newCategory: ICategory = {
      name: this.name!,
    }
    this.categoryService.addCategory(newCategory).subscribe(
      () => [this.router.navigate(["/categories"])]
    )
  }
}
