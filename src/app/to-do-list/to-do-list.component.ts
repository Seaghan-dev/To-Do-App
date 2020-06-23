import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ToDo } from '../to-do';
import { CrudService } from '../crud.service';
//import { TODOS } from '../mock-to-dos';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  public todos: Observable<any[]>;

  selectedToDo: ToDo;
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.todos = this.crudService.readToDos();
  }

  selectToDo(todo: ToDo): void {
    this.selectedToDo = todo;
  }
}
