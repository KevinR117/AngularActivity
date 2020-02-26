import { Component, Input } from '@angular/core';

export class PostsService {

    Posts : any[] = [
    {
      title : 'Premier Post',
      content : 'blablabla',
      publicationDate : new Date(),
      nombreLike : 0
    },
    {
      title : 'Second Post',
      content : 'blablablabla',
      publicationDate : new Date(),
      nombreLike : 0
    },
    {
      title : 'Dernier Post',
      content : 'blablablablabla',
      publicationDate : new Date(),
      nombreLike : 0
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

  likeOne(i: number) {
    this.Posts[i].nombreLike++;
  }

  dislikeOne(i: number) {
    this.Posts[i].nombreLike--;
  }
};

