import { Injectable } from '@angular/core';
import { ICart } from '../interface/cart';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  API = "http://localhost:3000/carts"
  constructor(private http: HttpClient) { }
  getCarts(): Observable<ICart[]> {
    return this.http.get<ICart[]>(`${this.API}`)
  }
  deleteCart(id: string): Observable<ICart> {
    return this.http.delete<ICart>(`${this.API}/${id}`)
  }
  addCart(data: ICart): Observable<ICart> {
    return this.http.post<ICart>(`${this.API}`, data)
  }
  clearCarts(): Observable<any> {
    return this.http.delete(`${this.API}`);
  }
}
