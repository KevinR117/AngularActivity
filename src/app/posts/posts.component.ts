import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from './../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  dateCreation : Date;
  modifDate : Date;

  Posts : any[];

  @Input() title : string;
  @Input() content : string;
  @Input() liked : boolean;

  @Input() id : number;

  authStatus : boolean;

  nombreLike : number = 0;

  @Input() index : number;

  @Input() nouveauTitleOne : string;
  @Input() nouveauContenuOne : string;

  modified = false;

  postSubscription : Subscription;

  constructor(private postsService : PostsService) {
    this.dateCreation = new Date();
  }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (Posts : any[]) => {
        this.Posts = Posts
      }
    )
    this.postsService.emitPostSubject();
  }

  nbLikeMore() {
    this.postsService.likeOne(this.index);
    this.nombreLike = this.Posts[this.index].nombreLike;
  }

  nbLikeLess () {
    this.postsService.dislikeOne(this.index);
    this.nombreLike = this.Posts[this.index].nombreLike;
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

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
