import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input nouveauMessage : string;
  @Input nouveauTitre : string;

  Posts = [
    {
      title : 'Premier Post',
      content : 'blablabla',
      publicationDate : new Date()
    },
    {
      title : 'Second Post',
      content : 'blablablabla',
      publicationDate : new Date()
    },
    {
      title : 'Dernier Post',
      content : 'blablablablabla',
      publicationDate : new Date()
    },
  ];

  envoiMessage() {
    let newPost = {
      title : this.nouveauTitre,
      content : this.nouveauMessage,
      publicationDate : new Date()
    }
    this.Posts.push(newPost)
  }
}
