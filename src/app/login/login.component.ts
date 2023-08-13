import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

email: string;
  password: string;

export class LoginComponent {
  

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}
