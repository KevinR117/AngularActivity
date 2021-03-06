import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  authStatus : boolean;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn();
    console.log('Sign in successful');
    console.log('Félicitations, vous êtes à présent connecté');
    this.router.navigate(['posts']);
    this.authStatus = this.authService.isAuth;
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
