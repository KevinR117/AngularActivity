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
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SinglePostComponent } from './single-post/single-post.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes : routes = [
  {path : 'posts', canActivate : [AuthGuard], component : PostsViewComponent},
  {path : 'posts/:id', canActivate : [AuthGuard], component : SinglePostComponent},
  {path : 'auth', component : AuthComponent},
  {path : '', component : PostsViewComponent},
  {path : 'not-found', component : FourOhFourComponent},
  {path : '**', redirectTo : 'not-found'},
]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AuthComponent,
    PostsViewComponent,
    SinglePostComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
