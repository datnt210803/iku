import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { IUser } from '../interface/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API = "http://localhost:3000/users"
  constructor(private http: HttpClient) { }
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.API}`)
  }
  getUserById(id:string): Observable<IUser> {
    return this.http.get<IUser>(`${this.API}/${id}`)
  }
  register(data:IUser):Observable<IUser>{
    return this.http.post<IUser>(`${this.API}`,data)
  }
  updateUser(id:string,data:IUser):Observable<IUser>{
    return this.http.put<IUser>(`${this.API}/${id}`,data)
  }
}
