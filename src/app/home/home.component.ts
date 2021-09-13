import { Component, OnInit } from '@angular/core';
import {PostService} from "../post.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allPost$: Observable<any> = new Observable<any>();
  filter: any = {orderBy: 'oldest', username: ''};

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.allPost$ = this.postService.getPosts();
  }

  onSubmit() {
    const params: any = {
      orderBy: 'createdAt',
      order: this.filter.orderBy === 'latest' ? -1 : 1,
    }
    if (this.filter.username) {
      params.username = this.filter.username;
    }

    this.allPost$ = this.postService.getPosts(params);
  }
}
