import { Component, OnInit } from '@angular/core';
import {PostService} from "../post.service";

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

  constructor(private postService: PostService) { }

  ngOnInit(): void {
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
    // formData.append('userId', restObj[key]);

    this.postService.createPosts(formData).subscribe((value => {
      this.message = 'Post created.'
    }))
  }
}
