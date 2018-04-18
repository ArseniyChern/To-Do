import {TokenService} from '../token.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private tokenService: TokenService) {
    const token = sessionStorage.getItem('jsessionid');
    console.log(token);
    if (token == null || JSON.parse(token).expires_in < new Date().getTime()) {
      console.log('redirecting to login');
      router.navigateByUrl('/login');
    }
  }


}
