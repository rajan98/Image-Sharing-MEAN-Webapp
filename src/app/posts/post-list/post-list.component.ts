import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
    {title: 'First Post', content: 'This is the First Post'},
    {title: 'Second Post', content: 'This is the First Post'},
    {title: 'Third Post', content: 'This is the First Post'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
