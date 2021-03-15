import { Component } from '@angular/core';
import { Posts } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  storedPost: Posts[] = []

  onPostAdded(post) {
    this.storedPost.push(post);
  }
}
