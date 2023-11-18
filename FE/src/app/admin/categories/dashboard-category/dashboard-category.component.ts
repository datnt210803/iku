import { Component } from '@angular/core';
import { ICategory } from 'src/app/interface/category';
import { CategoriesServiceService } from 'src/app/services/categories-service.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard-category',
  templateUrl: './dashboard-category.component.html',
  styleUrls: ['./dashboard-category.component.css']
})
export class DashboardCategoryComponent {
  categories: ICategory[] = []
  
  constructor(private productService: ProductsService,private categoryService: CategoriesServiceService) {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data
        console.log(data);

      }
    )
  }
  
 
  delete(id: string) {
    this.categoryService.deleteCategory(id).subscribe(
      () => {
        this.categories = this.categories.filter(item => item.id != id)
      }
    )
  }
}
