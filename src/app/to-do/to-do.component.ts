import { Component, OnInit } from '@angular/core';

import { ToDo } from '../to-do';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  todo: ToDo = {
    value: '',
  };

  constructor(private crudService: CrudService) {}

  createToDo() {
    this.crudService.createToDo(this.todo);
  }

  ngOnInit(): void {}
}
