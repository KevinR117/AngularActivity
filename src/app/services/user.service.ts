import { User } from './../models/User.model';
import { Subject } from 'rxjs';

export class UserService {

  user = new User('Kevin', 'Rives', 'kevin.rives@cecntrale-marseille.fr');
  private users : User[] = [
    this.user,
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user : User) {
    this.users.push(user);
    this.emitUsers();
  }

}