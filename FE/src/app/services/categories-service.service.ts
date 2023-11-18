import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { ICategory } from '../interface/category';
@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {

  API = "http://localhost:3000/categories"
  constructor(private http: HttpClient) { }
  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.API}`)
  }
  getCategoryById(id: string): Observable<ICategory> {
    return this.http.get<ICategory>(`${this.API}/${id}`)
  }
  deleteCategory(id: string): Observable<ICategory> {
    return this.http.delete<ICategory>(`${this.API}/${id}`)
  }
  addCategory(data: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`${this.API}`, data)
  }
  updateCategory(id: string, data: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(`${this.API}/${id}`, data)
  }
}
