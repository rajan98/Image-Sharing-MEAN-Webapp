import { Component, OnInit, Input } from '@angular/core';
import { Posts } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  // posts = [
    // {title: 'First Post', content: 'This is the First Post'},
    // {title: 'Second Post', content: 'This is the First Post'},
    // {title: 'Third Post', content: 'This is the First Post'}
  // ]

  @Input() posts: Posts[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
