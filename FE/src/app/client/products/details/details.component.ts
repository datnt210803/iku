import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { CategoriesServiceService } from 'src/app/services/categories-service.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
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
  getCategoryName(categoryId: string): string {
    const category = this.categories.find(category => category.id === categoryId);
    return category ? category.name : 'Unknown Category';
  }
}
