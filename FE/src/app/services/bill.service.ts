import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBill } from '../interface/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  userId = String(localStorage.getItem("id"))
  API = "http://localhost:3000/bills"
  constructor(private http: HttpClient) { }
  getBills():Observable<IBill[]> {
    return this.http.get<IBill[]>(`${this.API}`)
  }
  updateBill(id:string,data:IBill):Observable<IBill>{
    return this.http.put<IBill>(`${this.API}/${id}`,data)
  }
}
