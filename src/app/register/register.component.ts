import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  message: string = '';
  errorMessage: string = '';

  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.register({
      username: this.username,
      password: this.password
    }).subscribe(res => {
      this.message = 'Registered'
      this.router.navigate(['./login'])
    }, err => {
      this.errorMessage = err.error.message;
    })
  }

  close() {
    this.errorMessage = '';
  }
}
