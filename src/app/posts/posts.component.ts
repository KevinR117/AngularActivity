import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  @Input title : string;
  @Input content : string;
  @Input liked : boolean;
  @Input nombreLike : int = 0;
  @Input index : number;

  @Input nouveauTitleOne : string;
  @Input nouveauContenuOne : string;

  modified = false;

  constructor() {
    this.dateCreation = new Date();
  }

  ngOnInit() {

  }

  nbLikeMore() {
    this.nombreLike++;
  }

  nbLikeLess () {
    this.nombreLike--;
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
}
