import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './client/products/home/home.component';
import { DetailsComponent } from './client/products/details/details.component';
import { CartsComponent } from './client/products/carts/carts.component';
import { LoginComponent } from './client/users/login/login.component';
import { SignupComponent } from './client/users/signup/signup.component';
import { DashboardComponent } from './admin/products/dashboard/dashboard.component';
import { AddComponent } from './admin/products/add/add.component';
import { UpdateComponent } from './admin/products/update/update.component';

import { AddCategoryComponent } from './admin/categories/add-category/add-category.component';
import { DashboardCategoryComponent } from './admin/categories/dashboard-category/dashboard-category.component';
import { UpdateCategoryComponent } from './admin/categories/update-category/update-category.component';
import { DashboardUserComponent } from './admin/users/dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsListComponent } from './client/products/products-list/products-list.component';
@NgModule({
  declarations: [AppComponent, UpdateComponent, NotFoundComponent, HomeComponent, DetailsComponent, CartsComponent, LoginComponent, SignupComponent, DashboardComponent, AddComponent, AddCategoryComponent, DashboardCategoryComponent, UpdateCategoryComponent,DashboardUserComponent, HeaderComponent, FooterComponent, ProductsListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
