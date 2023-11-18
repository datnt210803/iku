import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { CategoriesServiceService } from 'src/app/services/categories-service.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  categories: any[] = []
  products: IProduct[] = []
  constructor(private productService: ProductsService,private categoryService: CategoriesServiceService) {
    this.productService.getProduct().subscribe(
      (data) => {
        this.products = data
        console.log(data);

      }
    )
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
  getCategoryName(categoryId: string): string {
    const category = this.categories.find(category => category.id === categoryId);
    return category ? category.name : 'Unknown Category';
}
  delete(id: string) {
    this.productService.deleteProduct(id).subscribe(
      () => {
        this.products = this.products.filter(item => item.id != id)
      }
    )
  }
}
