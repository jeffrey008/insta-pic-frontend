import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http: HttpClient) { }

  getPosts(params?: any) {
    return this.http.get(`${environment.backendAPI}/posts`, {params})
  }

  createPosts(body: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post(`${environment.backendAPI}/posts`, body, {headers: headers})
  }

}
