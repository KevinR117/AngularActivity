import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements onInit {

  @Input nouveauMessage : string;
  @Input nouveauTitre : string;

  Posts : any[];

  constructor(private postsService : PostsService) {

  }

  ngOnInit() {
    this.Posts = this.postsService.Posts;
  }

  envoiMessage() {
    let newPost = {
      title : this.nouveauTitre,
      content : this.nouveauMessage,
      publicationDate : new Date()
    }
    this.Posts.push(newPost)
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
