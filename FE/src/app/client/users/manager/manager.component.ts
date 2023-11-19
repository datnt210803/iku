import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interface/user';
import { RoleService } from 'src/app/services/role.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  user:IUser|undefined
  constructor(private router: Router,private roleService: RoleService, private userService: UsersService, private cdr: ChangeDetectorRef) {
    this.userService.getUserById(String(localStorage.getItem("id"))).subscribe(
      (data) => {
        this.user = data;
      }
    );
  }
  
}
