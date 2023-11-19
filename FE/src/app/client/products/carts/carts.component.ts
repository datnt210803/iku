import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from 'src/app/interface/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent {
  carts: ICart[] = [];
  totalAmount: number = 0;

  constructor(private http: HttpClient, private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.getCartList();
  }

  calculateTotalAmount() {
    this.totalAmount = this.carts.reduce((total, cart) => {
      return total + cart.quantity * cart.product.price;
    }, 0);
  }

  getCartList() {
    this.cartService.getCarts().subscribe((data) => {
      this.carts = data;
      console.log(data);
      this.calculateTotalAmount();
    });
  }

  removeCart(id: string) {
    this.cartService.deleteCart(id).subscribe(() => window.location.reload());
  }

  deleteItem(id: string) {
    this.http.delete(`http://localhost:3000/carts/${id}`).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  deleteAllItems() {
    this.http.get<ICart[]>('http://localhost:3000/carts').subscribe(
      (data) => {
        data.forEach((item) => this.deleteItem(String(item.id)));
      },
      (error) => {
        console.error('Error:', error);
      },
      () => this.createBill()
    );
  }

  createBill() {
    
    const billData = {
      items: this.carts.map((cart) => {
        return {
          product: [cart.product],
          quantity: cart.quantity,
          
        };
      }),
      totalAmount: this.totalAmount,
      id_user:String(localStorage.getItem("id")),
      status:1
    };

    
    this.http.post('http://localhost:3000/bills', billData).subscribe(
      (data) => {
        console.log('Bill created:', data);
      },
      (error) => {
        console.error('Error creating bill:', error);
      },
      () => this.router.navigate(['/bill'])
    );
  }

  checkout() {
    this.deleteAllItems();
  }
}
