import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from './../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input title : string;
  @Input content : string;
  @Input liked : boolean;

  authStatus : boolean;

  nombreLike : int = 0;

  @Input index : number;

  @Input nouveauTitleOne : string;
  @Input nouveauContenuOne : string;

  modified = false;

  constructor(private postsService : PostsService) {
    this.dateCreation = new Date();
  }

  ngOnInit() {

  }

  nbLikeMore() {
    this.postsService.likeOne(this.index);
    this.nombreLike = this.postsService.Posts[this.index].nombreLike;
  }

  nbLikeLess () {
    this.postsService.dislikeOne(this.index);
    this.nombreLike = this.postsService.Posts[this.index].nombreLike;
  }

  getColor () {
    if (this.nombreLike < 0) {
      return "red";
    } else if (this.nombreLike > 0) {
      return "green";
    }
  }

  changeContentOne() {
    this.content = this.nouveauContenuOne;
    this.modifDate = new Date();
    this.modified = true;
  }

  changeTitleOne() {
    this.title = this.nouveauTitleOne;
    this.modifDate = new Date();
    this.modified = true;
  }
}
