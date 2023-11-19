import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private roleSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(localStorage.getItem('role'));
  public role$: Observable<string | null> = this.roleSubject.asObservable();

  constructor() {}

  setRole(role: string | null): void {
    localStorage.setItem('role', role || ''); // Ensure role is a string or null
    this.roleSubject.next(role);
  }
}
