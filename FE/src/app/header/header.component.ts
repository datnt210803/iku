import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { IProduct } from '../interface/product';
import { ICategory } from '../interface/category';
import { ProductsService } from '../services/products.service';
import { CategoriesServiceService } from '../services/categories-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  role: string | null = null;
  products: IProduct[] = []
  categories: ICategory[] = []
  categoryId: string = ""
  searchValue: string = ""
  productValues: IProduct[] = [];
  showNoDataMessage: boolean = false;
  currentUrl: string = '';
  constructor(private roleService: RoleService, private productService: ProductsService, private categoryService: CategoriesServiceService, private router: Router, private route: ActivatedRoute) {
    this.productService.getProduct().subscribe(
      (data) => {
        this.products = data
      }
    )
  }
  ngOnInit() {
    this.roleService.role$.subscribe((role) => {
      this.role = role;
    });
    this.loadCategories();
    this.currentUrl = this.router.url;

    this.route.url.subscribe((segments) => {
      this.currentUrl = segments.join('/');
    });
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
  searchCategory(value: string = "") {
    const category = this.categories.find(category => category.name === value);
    if (category) {
      this.categoryId = String(category.id)
    }
  }

  search() {
    this.productValues = this.products.filter(
      product => product.name === this.searchValue ||
        product.author === this.searchValue ||
        this.searchCategory(this.searchValue)
    );

    this.showNoDataMessage = this.productValues.length === 0;
    console.log(this.productValues);
  }
  clearSearch() {
    this.searchValue = "";
    this.categoryId = "";
    window.location.reload()
  }
  logout() {
    this.roleService.setRole(null);
    ()=>this.router.navigate(["/login"])
  }
}
