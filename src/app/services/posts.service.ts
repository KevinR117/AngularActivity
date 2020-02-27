import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

export class PostsService {

    postsSubject = new Subject<any[]>();

    private Posts : any[] = [
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
      this.emitPostSubject();
    }
  }

  changeContentsAll() {
    for (let post of this.Posts) {
      post.content = 'même contenu pour tout le monde !';
      this.emitPostSubject();
    }
  }

  likeOne(i: number) {
    this.Posts[i].nombreLike++;
    this.emitPostSubject;
  }

  dislikeOne(i: number) {
    this.Posts[i].nombreLike--;
    this.emitPostSubject();
  }

  getPostById(id: number) {
    const post = this.Posts.find(
      (s) => {
        return s.id === id;
      }
    )
    return post;
  }

  emitPostSubject() {
    this.postsSubject.next(this.Posts.slice());
  }
};

