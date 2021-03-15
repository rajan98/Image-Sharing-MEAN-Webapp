import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Posts } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  enteredTitle = ''
  enteredContent = ''
  @Output() postCreated = new EventEmitter<Posts>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm){
    if(form.invalid)
      return

    const post: Posts = {
      title: form.value.title,
      content: form.value.content
    }
    this.postCreated.emit(post);
  }

}
