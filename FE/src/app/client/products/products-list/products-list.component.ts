import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { CategoriesServiceService } from 'src/app/services/categories-service.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  categories: any[] = []
  products: IProduct[] = []
  selectedCategory = 'All';
  maxPrice: number | undefined;
  filteredProducts: IProduct[] = [];

  constructor(private productService: ProductsService, private categoryService: CategoriesServiceService) {}

  ngOnInit() {
    this.productService.getProduct().subscribe(
      (data) => {
        this.products = data;
        this.applyFilters(); // Gọi hàm applyFilters khi có dữ liệu sản phẩm
        console.log(data);
      }
    );

    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  applyFilters() {
    this.filteredProducts = this.products
      .filter(product => this.selectedCategory === 'All' || product.id_category === this.selectedCategory)
      .filter(product => !this.maxPrice || product.price <= this.maxPrice);
    console.log(this.filteredProducts);
  }
}
