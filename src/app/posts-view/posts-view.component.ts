import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from './../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.scss']
})
export class PostsViewComponent implements OnInit, OnDestroy {

  Posts : any[];

  postSubscription : Subscription;

  @Input() nouveauMessage : string;
  @Input() nouveauTitre : string;

  constructor(private postsService : PostsService) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (Posts : any[]) => {
        this.Posts = Posts;
      }
    );
    this.postsService.emitPostSubject();
  }

  changeTitle() {
    if(confirm('êtes-vous sûr de vouloir modifier le titre de tous les posts ?')) {
      this.postsService.changeTitlesAll();
    } else {
      return null;
    }
  }

  changeContent() {
    if(confirm('êtes-vous sûr de vouloir modifier le contenu de tous les posts ?')) {
      this.postsService.changeContentsAll();
    } else {
      return null;
    }
  }

  onSave() {
    this.postsService.savePostsToServer();
  }

  onFetch() {
    this.postsService.getPostsFromServer();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}