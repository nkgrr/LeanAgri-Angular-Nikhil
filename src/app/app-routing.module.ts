import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {AddPostComponent} from './add-post/add-post.component';
import {EditPostComponent} from './edit-post/edit-post.component';

const routes: Routes = [
  {path: '', component: PostListComponent, pathMatch: 'full'},
  {path: 'post/:id', component: PostDetailComponent, pathMatch: 'full'},
  {path: 'add-post', component: AddPostComponent, pathMatch: 'full'},
  {path: 'edit-post/:id', component: EditPostComponent, pathMatch: 'full'},
  {path: '*', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
