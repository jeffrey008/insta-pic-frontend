import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {BehaviorSubject} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(false);
  currentUser$ = new BehaviorSubject<object>({});

  constructor(public http: HttpClient) { }

  login(body: {username: string, password: string}) {
    return this.http.post(`${environment.backendAPI}/login`, body).pipe(map(res => {
      this.currentUser$.next(res)
      this.isLoggedIn$.next(true);
    }))
  }

  register(body: {username: string, password: string}) {
    return this.http.post(`${environment.backendAPI}/register`, body).pipe(map(res => {

    }))
  }

  logout() {
    this.isLoggedIn$.next(false);
  }
}
