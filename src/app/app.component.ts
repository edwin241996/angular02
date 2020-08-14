import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ejercicio';
  user: Array<any>;

  constructor(private userService: UserService) {
    this.user = new Array<any>();
  }

  getAllUsers() {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
  }
}
