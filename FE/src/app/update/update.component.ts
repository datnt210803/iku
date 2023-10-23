import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../interface/product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  id:string|undefined
  product:IProduct|undefined
  name: string | undefined
  price: number | undefined
  desc: string | undefined
  constructor(private productService: ProductsService, private router: Router, private route:ActivatedRoute) {

  }
  ngOnInit(){
    this.route.params.subscribe(
      params=>{
        this.id=params["id"]
        this.productService.getProductById(this.id!).subscribe(
          (data)=>{
            this.product=data
          }
        )
      }
    )
  }
  update(){
    const newProduct: IProduct = {
      name: this.name!,
      price: this.price!,
      desc: this.desc!
    }
    this.productService.updateProduct(this.id!,newProduct).subscribe(
      () => [this.router.navigate(["/"])]
    )
  }
}
