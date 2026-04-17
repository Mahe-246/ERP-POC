import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user';

@Component({
selector: 'app-root',
standalone: true,
imports: [CommonModule],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class AppComponent {

users: any[] = [];

constructor(private userService: UserService) {}

loadUsers() {
this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}