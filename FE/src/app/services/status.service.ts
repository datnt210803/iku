import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StatusService {
  API = "http://localhost:3000/status"
  constructor(private http: HttpClient) { }
  getStatus():Observable<{id:number,name:string}[]> {
    return this.http.get<{id:number,name:string}[]>(`${this.API}`)
  }
}
