import { Component } from '@angular/core';
import { IProduct } from '../interface/product';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  product: IProduct | undefined
  constructor(private productService: ProductsService, private route:ActivatedRoute) {

  }
  ngOnInit(){
    this.route.params.subscribe(
      params=>{
        const id=params["id"]
        this.productService.getProductById(id).subscribe(
          (data)=>{
            this.product=data
            
          }
        )
      }
    )
  }
}
