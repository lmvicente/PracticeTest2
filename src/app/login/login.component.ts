import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../localStorageService';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';

export interface IUser {
  id?: number;
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private toastService: ToastService) {
  }

  user: IUser = {
    username: null,
    password: null,
  };

  ngOnInit() {

  }
  login(user: IUser) {
    // console.log(user);

    const presetUser = { username: 'leah', password: 'leah123' };
    if (user.username != null && user.password != null && user.username !== '' && user.password !== '') {
      // log user in
      // console.log('from within if statement..');
      if (user.username === presetUser.username && user.password === presetUser.password) {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['contacts', user]);
      } else {
        this.toastService.showToast('warning', 2000, 'Input correct credentials');
      }
    } else {
      // console.log('specify credidential');
      this.toastService.showToast('danger', 2000, 'Missing username or password.');
    }
  }
}
