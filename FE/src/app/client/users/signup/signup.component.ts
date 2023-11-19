import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interface/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  users: IUser[] = [];
  name: string = "";
  email: string = "";
  password: string = "";
  address: string = "";
  phoneNumber: number = 0;
  role: number = 0;
  confirmPassword: string = "";
  error: string = ""
  constructor(private router: Router, private userService: UsersService) {
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

  register() {
    if (
      this.name.trim() === "" ||
      this.email.trim() === "" ||
      this.password.trim() === "" ||
      this.confirmPassword.trim() === ""
    ) {
      this.error = "Please fill in all required fields.";
      console.log(this.error);
    } else {
      if (this.isEmailExists(this.email)) {
        this.error = "Email already exists";
        console.log(this.error);
      } else {
        if (this.password !== this.confirmPassword) {
          this.error = "Passwords do not match";
          console.log(this.error);

        } else {
          // Gán giá trị mới nếu thỏa mãn các điều kiện
          const newUser: IUser = {
            name: this.name!,
            email: this.email!,
            password: this.password,
            address: this.address,
            phoneNumber: this.phoneNumber,
            role: 2
          };

          this.userService.register(newUser).subscribe(
            () => [this.router.navigate(["/"])]
          );
        }
      }
    }
  }

}
