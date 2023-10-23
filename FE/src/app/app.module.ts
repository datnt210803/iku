import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './client/products/home/home.component';
import { DetailsComponent } from './client/products/details/details.component';
import { CartsComponent } from './client/products/carts/carts.component';
import { LoginComponent } from './client/products/login/login.component';
import { SignupComponent } from './client/products/signup/signup.component';
import { DashboardComponent } from './admin/products/dashboard/dashboard.component';
import { AddComponent } from './admin/products/add/add.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, CreateComponent, UpdateComponent, DetailComponent, NotFoundComponent, HomeComponent, DetailsComponent, CartsComponent, LoginComponent, SignupComponent, DashboardComponent, AddComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
