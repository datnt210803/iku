import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpdateComponent } from './admin/products/update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddComponent } from './admin/products/add/add.component';
import { DashboardComponent } from './admin/products/dashboard/dashboard.component';
import { DashboardCategoryComponent } from './admin/categories/dashboard-category/dashboard-category.component';
import { AddCategoryComponent } from './admin/categories/add-category/add-category.component';
import { UpdateCategoryComponent } from './admin/categories/update-category/update-category.component';
import { DashboardUserComponent } from './admin/users/dashboard/dashboard.component';
import { HomeComponent } from './client/products/home/home.component';
import { ProductsListComponent } from './client/products/products-list/products-list.component';
import { DetailsComponent } from './client/products/details/details.component';
import { SignupComponent } from './client/users/signup/signup.component';
import { LoginComponent } from './client/users/login/login.component';
import { ManagerComponent } from './client/users/manager/manager.component';
import { UpdateAccountComponent } from './client/users/update-account/update-account.component';

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  {
    path: "",
    children: [
      { path: "", component: HomeComponent },
      { path: "products", component: ProductsListComponent },
      { path: "products/:id", component: DetailsComponent },
      { path: "register", component: SignupComponent },
      { path: "login", component: LoginComponent },
      { path: "account", component: ManagerComponent },
      { path: "account/update", component: UpdateAccountComponent },
      
    ],
  },
  {
    path: "admin",
    children: [
      { path: "products", component: DashboardComponent },
      { path: "products/create", component: AddComponent },
      { path: "products/update/:id", component: UpdateComponent },
      { path: "categories", component: DashboardCategoryComponent },
      { path: "categories/create", component: AddCategoryComponent },
      { path: "categories/update/:id", component: UpdateCategoryComponent },
      { path: "users", component: DashboardUserComponent },
    ],
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
