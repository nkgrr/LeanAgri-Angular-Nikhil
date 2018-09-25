import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {constants, urls} from '../../environments/environment';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostListService {

  constructor(private http: HttpClient) {
  }

  // Get All Posts
  getPost(): Observable<any> {
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type': constants.json
    });
    return this.http.get(urls.posts, {headers: header})
      .pipe(
        tap(res => res)
      );
  }

  // Get Single Post
  getSinglePost(id): Observable<any> {
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type': constants.json
    });
    return this.http.get(urls.singlePosts.replace('{id}', id), {headers: header})
      .pipe(
        tap(res => res)
      );
  }

  // Get Comment of the post
  getCommentsofPost(id): Observable<any> {
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type': constants.json
    });
    return this.http.get(urls.comments.replace('{id}', id), {headers: header})
      .pipe(
        tap(res => res)
      );
  }

  addPost(body: any): Observable<any> {
    const data = JSON.stringify(body);
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type': constants.json
    });
    return this.http.post(urls.posts, data, {headers: header, observe: 'response'})
      .pipe(
        tap(res => res)
      );
  }

  editPost(body: any, id): Observable<any> {
    const data = JSON.stringify(body);
    const header: HttpHeaders = new HttpHeaders({
      'Content-Type': constants.json
    });
    return this.http.put(urls.singlePosts.replace('{id}', id), data, {headers: header, observe: 'response'})
      .pipe(
        tap(res => res)
      );
  }

}
