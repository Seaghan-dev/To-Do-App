import { Component, OnInit, Input } from '@angular/core';
import { EditToDo } from '../edit-to-do';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.component.html',
  styleUrls: ['./edit-to-do.component.css'],
})
export class EditToDoComponent implements OnInit {
  @Input() todo: EditToDo;
  constructor(private crudService: CrudService) {}

  updateToDo() {
    this.crudService.updateToDo(this.todo.id, this.todo.value);
  }

  deleteToDo() {
    this.crudService.deleteToDo(this.todo.id);
    this.todo = null;
  }

  ngOnInit(): void {}
}
