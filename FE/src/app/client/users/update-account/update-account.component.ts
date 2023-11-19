import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interface/user';
import { RoleService } from 'src/app/services/role.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent {
  user: IUser | undefined
  name: string = ""
  phoneNumber: number = 0
  address: string = ""
  constructor(private router: Router, private roleService: RoleService, private userService: UsersService, private cdr: ChangeDetectorRef) {
    this.userService.getUserById(String(localStorage.getItem("id"))).subscribe(
      (data) => {
        this.user = data;
        this.name = data.name
        this.phoneNumber = data.phoneNumber
        this.address = data.address
      }
    );
  }
  update() {
    const userUpdate = {
      name: this.name!,
      email: this.user?.email!,
      password: this.user?.password!,
      address: this.address!,
      phoneNumber: this.phoneNumber!,
      role: this.user?.role!
    }
    this.userService.updateUser(String(localStorage.getItem("id")), userUpdate).subscribe(
      () => [this.router.navigate(["/account"])]
    )
  }
}
