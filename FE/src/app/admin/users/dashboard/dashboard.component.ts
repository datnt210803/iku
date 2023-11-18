import { Component } from '@angular/core';
import { IUser } from 'src/app/interface/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardUserComponent {
  users: IUser[] = []
  
  constructor(private userService:UsersService) {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data
        console.log(data);

      }
    )
  }
}
