import { Component, OnInit } from '@angular/core';
import { PostsService } from './../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  title : string;
  content : string;
  nombrelike : number;
  
  constructor(private postsService : PostsService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.title = this.postsService.getPostById(+id).title;
    this.content = this.postsService.getPostById(+id).content;
    this.nombrelike = this.postsService.getPostById(+id).nombrelike;
  }

}
