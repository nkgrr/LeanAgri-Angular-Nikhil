import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostListService} from '../services/post-list.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  editPostForm: FormGroup;
  postId: number;

  constructor(public fb: FormBuilder, private postService: PostListService, public router: Router, public activatedRoute: ActivatedRoute) {
    this.postId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.buildForm();
    this.getSinglePost();
  }

  getSinglePost() {
    this.postService.getSinglePost(this.postId).subscribe(
      (data: any) => {
        this.editPostForm.controls.title.setValue(data.title);
        this.editPostForm.controls.body.setValue(data.body);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  buildForm() {
    this.editPostForm = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', Validators.required],
      userId: [1]
    });
  }

  submitPost() {
    const form = this.editPostForm;
    if (form.get('title').errors === null && form.get('body').errors === null) {
      this.postService.editPost(form.value, this.postId).subscribe(
        (data: any) => {
          switch (data.status) {
            case 200:
              this.router.navigateByUrl('/post/' + this.postId);
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

}
