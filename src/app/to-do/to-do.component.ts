import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';
import { TODOS } from '../mock-to-dos';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  todo: ToDo = {
    id: TODOS[TODOS.length - 1].id + 1,
    value: '',
  };

  constructor() {}

  addToDo() {
    TODOS.push({ ...this.todo });
    this.todo.id = ++this.todo.id;
  }

  ngOnInit(): void {}
}
