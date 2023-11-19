import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComment } from '../interface/comment';
import { Observable } from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  API = "http://localhost:3000/comments"
  constructor(private http: HttpClient) { }
  getComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.API}`)
  }
  deleteComment(id: string): Observable<IComment> {
    return this.http.delete<IComment>(`${this.API}/${id}`)
  }
  addComment(data: IComment): Observable<IComment> {
    return this.http.post<IComment>(`${this.API}`, data)
  }
  updateComment(id: string, data: IComment): Observable<IComment> {
    return this.http.put<IComment>(`${this.API}/${id}`, data)
  }
}
