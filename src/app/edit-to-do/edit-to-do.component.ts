import { Component, OnInit, Input } from '@angular/core';
import { EditToDo } from '../edit-to-do';

@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.component.html',
  styleUrls: ['./edit-to-do.component.css'],
})
export class EditToDoComponent implements OnInit {
  @Input() todo: EditToDo;
  constructor() {}

  updateToDo() {
    console.log('updating todo');
  }

  removeToDo() {
    console.log('deleting todo');
  }

  ngOnInit(): void {}
}
