import {Component, OnInit} from '@angular/core';
import {PostListService} from '../services/post-list.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostListService]
})
export class PostDetailComponent implements OnInit {

  postId: number;
  post: any;
  comments: any;

  constructor(private postService: PostListService, public route: ActivatedRoute) {
    this.postId = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.getSinglePost();
    this.getComments();
  }

  getSinglePost() {
    this.postService.getSinglePost(this.postId).subscribe(
      (data: any) => {
        this.post = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getComments() {
    this.postService.getCommentsofPost(this.postId).subscribe(
      (data: any) => {
        this.comments = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
