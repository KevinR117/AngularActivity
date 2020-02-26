import { Component, Input,OnInit } from '@angular/core';
import { PostsService } from './../services/posts.service'

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.scss']
})
export class PostsViewComponent implements OnInit {

  Posts : any[];

  @Input nouveauMessage : string;
  @Input nouveauTitre : string;

  constructor(private postsService : PostsService) { }

  ngOnInit() {
    this.Posts = this.postsService.Posts;
  }

  envoiMessage() {
    let newPost = {
      id : this.Posts[this.Posts.length - 1].id + 1,
      title : this.nouveauTitre,
      content : this.nouveauMessage,
      publicationDate : new Date(),
      nombreLike : 0,
    }
    this.Posts.push(newPost);
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
}