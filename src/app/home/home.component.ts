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

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.allPost$ = this.postService.getPosts();
  }

}
