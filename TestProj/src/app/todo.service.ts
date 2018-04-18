import {HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  todoList = [];

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    const token = sessionStorage.getItem('jsessionid');
    if (token !== null) {

      const headers: HttpHeaders = new HttpHeaders()
        .append('Authorization', 'Bearer ' + JSON.parse(token).access_token);

      this.http.post('http://localhost:8080/getTasks', {withCredentials: true}, {
        headers: headers
      }).subscribe(result => {
        console.log(result);
        for (let i = 0; ; i++) {
          if (result[i] == null) {
            break;
          }
          this.todoList.unshift(result[i].tasks);
        }

      });
    }
  }

  addItem(task: string, token: string) {
    this.todoList.unshift(task);

    const headers: HttpHeaders = new HttpHeaders()
      .append('Authorization', 'Bearer ' + token);

    const params: HttpParams = new HttpParams()
      .append('task', task);

    this.http.post('http://localhost:8080/insertTask', {withCredentials: true}, {
      params: params,
      headers: headers
    }).subscribe(i => {
      console.log(i);
    });
  }

}
