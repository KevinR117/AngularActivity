import { Component, Input } from '@angular/core';

export class PostsService {

    Posts : any[] = [
    {
      id : 0,
      title : 'Premier Post',
      content : 'blablabla',
      publicationDate : new Date(),
      nombreLike : 0
    },
    {
      id : 1,
      title : 'Second Post',
      content : 'blablablabla',
      publicationDate : new Date(),
      nombreLike : 0
    },
    {
      id : 2,
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

  getPostById(id: number) {
    const post = this.Posts.find(
      (s) => {
        return s.id === id;
      }
    )
    return post;
  }
};

