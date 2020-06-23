import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EditToDo } from '../edit-to-do';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  public todos: Observable<any[]>;

  selectedToDo: EditToDo;
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.todos = this.crudService.readToDos();
  }

  selectToDo(todo: EditToDo): void {
    this.selectedToDo = todo;
  }
}
