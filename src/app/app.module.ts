import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './services/posts.service';
import { AuthComponent } from './auth/auth.component';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { Routes } from '@angular/router';

const appRoutes : routes = [
  {path : 'posts', component : PostsViewComponent},
  {path : 'auth', component : AuthComponent},
  {path : '', component : PostsViewComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AuthComponent,
    PostsViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
