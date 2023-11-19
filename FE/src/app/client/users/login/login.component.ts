
import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interface/user';
import { RoleService } from 'src/app/services/role.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: IUser[] = [];
  password: string = "";
  email: string = "";
  error: string = "";

  constructor(private router: Router, private roleService: RoleService, private userService: UsersService, private cdr: ChangeDetectorRef) {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(data);
      }
    );
  }

  isEmailExists(email: string): boolean {
    return this.users.some(user => user.email === email);
  }

  login() {
    const user = this.users.find(user => user.email === this.email);
    if (this.isEmailExists(this.email)) {
      if (this.password == user?.password) {
        localStorage.setItem("id", user.id!);
        this.roleService.setRole(String(user.role));

        
        if (user.role === 1) {
          this.router.navigate(['/admin/products']);
        } else {
          this.router.navigate(['/']);
        }
      } else {
        this.error = 'Password is not correct';
        console.log(this.error);
      }
    } else {
      this.error = "Email is not already exists";
      console.log(this.error);
    }
  }
}
