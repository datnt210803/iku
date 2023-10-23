import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './interface/product';
import { Observable } from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API = "http://localhost:3000/products"
  constructor(private http: HttpClient) { }
  getProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API}`)
  }
  getProductById(id:string):Observable<IProduct>{
    return this.http.get<IProduct>(`${this.API}/${id}`)
  }
  deleteProduct(id:string):Observable<IProduct>{
    return this.http.delete<IProduct>(`${this.API}/${id}`)
  }
  addProduct(data:IProduct):Observable<IProduct>{
    return this.http.post<IProduct>(`${this.API}`,data)
  }
  updateProduct(id:string,data:IProduct):Observable<IProduct>{
    return this.http.put<IProduct>(`${this.API}/${id}`,data)
  }
}
