import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
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

  constructor(private httpClient : HttpClient) { }

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin' : '*',
  })

  savePostsToServer() {
    this.httpClient.put('https://projetangular-3dd3c.firebaseio.com/.json', this.Posts).subscribe(
      () => {
        console.log('enregistrement terminé');
      },
      (error) => {
        console.log('error : ' + error);
      }
    )
  }

  getPostsFromServer() {
    this.httpClient.get('https://projetangular-3dd3c.firebaseio.com/', {headers : this.headers}).subscribe(
      (reponse) => {
        this.Posts = reponse;
        this.emitPostSubject();
      },
      (error) => {
        console.log('error : ' + error);
      }
    )
  }

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

  emitPostSubject() {
    this.postsSubject.next(this.Posts.slice());
  }

  getPosts() {
    return this.Posts;
  }
};

