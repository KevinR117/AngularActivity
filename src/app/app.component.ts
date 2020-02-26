import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements onInit, OnDestroy {

  seconds : number = 0;
  counterSubscription : Subscription;

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.seconds = value;
      },
      (error) => {
        console.log('An error occured' + error);
      },
      () => {
        console.log('Observable complete');
      }
    )
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
