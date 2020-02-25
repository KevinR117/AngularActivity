import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input title : string;
  @Input content : string;
  @Input liked : boolean;
  @Input nombreLike : float = 0;

  constructor() {
    this.dateCreation = new Date();
   }

  ngOnInit(): void {
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
}
