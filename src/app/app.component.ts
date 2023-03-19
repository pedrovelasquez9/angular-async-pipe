import { Component } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Post } from './common/interfaces';
import { PostsService } from './core/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public hasError: boolean = false;
  public post$!: Observable<Post>;  
  constructor(private postService: PostsService){
    this.post$ = this.postService.getPost().pipe(catchError(error => {
      console.error(error);
      this.hasError = true;
      throw new Error(error);
    }))
  }

}
