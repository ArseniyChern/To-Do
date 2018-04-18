import {HttpResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RequestOptions} from '@angular/http';

class TokenInfo {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
}
@Injectable()
export class TokenService {

  constructor(private http: HttpClient) {}


  getToken(username: string, password: string) {
    const tokenURL = 'http://localhost:8080/oauth/token';

    const params: HttpParams = new HttpParams()
      .append('grant_type', 'password')
      .append('username', username)
      .append('password', password);

    const headers: HttpHeaders = new HttpHeaders()
      .append('Authorization', 'Basic ' + btoa('client:secret'));


    return this.http.post<TokenInfo>(tokenURL, {
      withCredentials: true
    }, {
        params: params,
        headers: headers
      });
  }

}
