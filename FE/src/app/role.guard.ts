// role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Lấy vai trò từ localStorage (thay thế bằng phương thức bạn sử dụng để lấy vai trò)
    const userRole = localStorage.getItem('role');

    // Kiểm tra nếu vai trò không phù hợp
    if (userRole !== '1') {
      // Chuyển hướng đến trang notFound nếu không có quyền truy cập
      this.router.navigate(['/not-found']);
      return false;
    }

    // Nếu có quyền truy cập, cho phép điều hướng
    return true;
  }
}
