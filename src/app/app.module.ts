import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
import { HttpClientModule } from '@angular/common/http';
import { NewPostComponent } from './new-post/new-post.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes : Routes = [
  {path : 'posts', canActivate : [AuthGuard], component : PostsViewComponent},
  {path : 'posts/:id', canActivate : [AuthGuard], component : SinglePostComponent},
  {path : 'new', canActivate : [AuthGuard], component : NewPostComponent},
  {path : 'auth', component : AuthComponent},
  {path : 'users', component : UserListComponent},
  {path : 'new-user', component : NewUserComponent},
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
    FourOhFourComponent,
    NewPostComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    PostsService,
    AuthService,
    AuthGuard,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
