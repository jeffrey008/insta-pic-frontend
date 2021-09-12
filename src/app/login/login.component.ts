import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.login({
      username: this.username,
      password: this.password
    }).subscribe(res => {
      this.router.navigate(['./home'])
    }, err => {
      this.errorMessage = err.error.message;
    })
  }

  close() {
    this.errorMessage = '';
  }
}
