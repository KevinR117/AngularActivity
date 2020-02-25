import { Component } from '@angular/core';

export class PostsService {
    Posts : any[] = [
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

  changeTitlesAll() {
    for (let post of this.Posts) {
      post.title = 'même titre pour tout le monde !';
    }
  }

  changeContentsAll() {
    for (let post of this.Posts) {
      post.content = 'même contenu pour tout le monde !';
    }
  }

};

