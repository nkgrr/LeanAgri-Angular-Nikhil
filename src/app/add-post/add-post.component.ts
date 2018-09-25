import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostListService} from '../services/post-list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [PostListService]
})
export class AddPostComponent implements OnInit {

  addPostForm: FormGroup;

  constructor(public fb: FormBuilder, private postService: PostListService, public router: Router) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.addPostForm = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', Validators.required],
      userId: [1]
    });
  }

  submitPost() {
    const form = this.addPostForm;
    if (form.get('title').errors === null && form.get('body').errors === null) {
      this.postService.addPost(form.value).subscribe(
        (data: any) => {
          switch (data.status) {
            case 201:
              this.router.navigateByUrl('/');
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
