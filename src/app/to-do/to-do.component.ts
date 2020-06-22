import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  todo: ToDo = {
    id: 0,
    value: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
