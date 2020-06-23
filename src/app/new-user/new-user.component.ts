import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { User } from './../models/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm = this.formBuilder.group({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
  })

  constructor(private formBuilder : FormBuilder, private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName : "",
      lastName : "",
      email : ""
    })
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(formValue['firstName'], formValue['lastName'], formValue['email'])
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

}
