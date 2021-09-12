import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'instapic-frontend';
  isLoggedIn: boolean | undefined;
  currentUser: any = {};
  // @ts-ignore
  constructor(public authService: AuthService, private router: Router) {
    this.authService.isLoggedIn$.subscribe(value => {
      this.isLoggedIn = value;
    });
    this.authService.currentUser$.subscribe(value => {
      this.currentUser = value;
    });
  }

  onClick() {
    this.authService.logout();
    this.router.navigate(['./login']);
  }
}
