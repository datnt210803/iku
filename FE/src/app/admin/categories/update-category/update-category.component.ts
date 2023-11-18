import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
import { CategoriesServiceService } from 'src/app/services/categories-service.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  id: string | undefined
  category: ICategory | undefined
  name: string | undefined
  constructor(private productService: ProductsService, private router: Router, private route: ActivatedRoute, private categoryService: CategoriesServiceService) {

  }
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params["id"]
        this.categoryService.getCategoryById(this.id!).subscribe(
          (data) => {
            this.category = data;
            this.name=data.name
          }
        )
      }
    )
  }
  
  update() {
    const newCategory: ICategory = {
      name: this.name!,
    }
    this.categoryService.updateCategory(this.id!, newCategory).subscribe(
      () => [this.router.navigate(["/categories"])]
    )
  }
}
