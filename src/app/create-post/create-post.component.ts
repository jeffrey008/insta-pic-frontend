import { Component, OnInit } from '@angular/core';
import {PostService} from "../post.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  description: string = '';
  image: any;
  url: any;
  message: string = '';
  currentUser: any;

  constructor(private postService: PostService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user: any) => {
      this.currentUser = user;
    })
  }

  onSelectFile(event: any) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        // @ts-ignore
        this.url = event.target.result;
      }
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.url)
    formData.append('desc', this.description);
    formData.append('user', this.currentUser._id);

    this.postService.createPosts(formData).subscribe((value => {
      this.message = 'Post created.'
    }))
  }
}
