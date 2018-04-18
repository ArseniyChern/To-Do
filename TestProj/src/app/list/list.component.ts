import {TodoService} from '../todo.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(public todo: TodoService) { todo.load(); }


}
