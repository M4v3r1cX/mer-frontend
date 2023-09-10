import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string;
  password: string;

  constructor(public userService: UsersService, public router: Router) {
    this.email = "";
    this.password = "";
  }

  login() {
    const loginDTO = { usuario: this.email, password: this.password };
    this.userService.login(loginDTO).subscribe((data: any) => {
      console.log(data);
      this.userService.setToken(data.comentario);
      this.router.navigateByUrl("/");
    });
  }
}
