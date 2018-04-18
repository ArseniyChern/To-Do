import { TodoService } from '../todo.service';
import { TokenService } from '../token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private list: TodoService) { }

  item: string;

  add() {

    const token = sessionStorage.getItem('jsessionid');
    this.list.addItem(this.item, JSON.parse(token).access_token);
    this.item = '';
  }

}
