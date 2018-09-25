import {Component, OnInit} from '@angular/core';
import {PostListService} from '../services/post-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostListService]
})
export class PostListComponent implements OnInit {

  posts = [];

  constructor(private postListService: PostListService) {
  }

  ngOnInit() {
    this.fetchAllPosts();
  }

  fetchAllPosts() {
    this.postListService.getPost().subscribe(
      (data: any) => {
        this.posts = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
