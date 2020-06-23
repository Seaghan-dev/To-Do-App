import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  todos: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {}

  createToDo(todo: any) {
    this.db.list('todos').push(todo);
  }

  readToDos() {
    this.todos = this.db
      .list('todos')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((item) => ({
            id: item.payload.key,
            ...(item.payload.val() as {}),
          }))
        )
      );
    return this.todos;
  }

  updateToDo(id: any, todo: any) {
    this.db.list('todos').set(id, { value: todo });
  }

  deleteToDo(id: any) {
    this.db.list('todos').remove(id);
  }
}
