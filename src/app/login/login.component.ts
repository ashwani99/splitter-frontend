import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;
  invalidLoginMsg: string;
  flashMsg: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  signIn(credentials) {
    // refactor this hack
    this.invalidLogin = null;
    this.flashMsg = null;
  
    this.authService.login(credentials)
      .subscribe((response: any) => {
        this.invalidLogin = false;
        this.router.navigate(['/app']);
      }, (err) => this.errorHandler(err));
  }

  registerAccount(payload, tabs) {
    // refactor this hack
    this.invalidLogin = null;
    this.flashMsg = null;

    this.userService.register(payload)
      .subscribe(response => {
        if (response) {
          this.flashMsg = 'Your account has been registered successfully. Please login to continue'
          tabs.select('signInTab');
        } else {
          console.log('Response is not ok')
          console.log(response);
        }
      }, (err) => this.errorHandler(err));
  }

  errorHandler(error) {
    this.invalidLoginMsg = error.error.msg || error.error.message;
    this.invalidLogin = true;
  }

}
