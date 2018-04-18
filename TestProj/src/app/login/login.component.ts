import {TokenService} from '../token.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  error = false;

  constructor(private tokenService: TokenService, private router: Router) {}

  login() {
    if (this.username.length !== 0 && this.password.length !== 0) {
      this.tokenService.
        getToken(this.username, this.password).
        subscribe(i => {
          i.expires_in = new Date().getTime() + i.expires_in * 1000;

          sessionStorage.setItem('jsessionid', JSON.stringify(i));

          this.router.navigateByUrl('/home');

        }, (error) => this.error = true);

    }
  }


}
