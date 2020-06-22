import { Component, OnInit } from '@angular/core';

import { ToDo } from '../to-do';
import { TODOS } from '../mock-to-dos';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  todos = TODOS;

  selectedToDo: ToDo;
  constructor() {}

  ngOnInit(): void {}

  selectToDo(todo: ToDo): void {
    this.selectedToDo = todo;
  }
}
