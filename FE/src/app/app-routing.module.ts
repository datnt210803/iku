import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"products",pathMatch:"full"},
  {path:"products",component:ProductsComponent},
  {path:"products/create",component:CreateComponent},
  {path:"products/detail/:id",component:DetailComponent},
  {path:"products/update/:id",component:UpdateComponent},
  {path:"**",component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
